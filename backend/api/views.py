from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.http import require_POST
from rest_framework import viewsets, status
from rest_framework.response import Response
from .serializers import *
from django.db.models import Q
import datetime


class DashboardViewSet(viewsets.ModelViewSet):
    serializer_class = UserEventsSerializer

    def get_queryset(self):
        queryset = UserEvents.objects.all().order_by('id')
        # TODO Currently getting user id from variable / django builtin auth, need to switch to @VV1S version of auth
        # user_id = self.request.user.id
        user_id = 1
        if user_id is not None:
            queryset = queryset.filter(owner_id=user_id)
        # TODO if not user_id then returns all events - it's for test now, to remove
        return queryset


class ProfileViewSet(viewsets.ModelViewSet):
    serializer_class = UsersSerializer

    def get_queryset(self):
        queryset = Users.objects.all().order_by('id')
        # TODO Currently getting user id from variable / django builtin auth, need to switch to @VV1S version of auth
        # user_id = self.request.user.id
        user_id = 2
        if user_id is not None:
            queryset = queryset.filter(id=user_id)
        # TODO if not user_id then returns all users - it's for test now, to remove
        return queryset


class CartViewSet(viewsets.ModelViewSet):
    serializer_class = CartGiftsSerializer

    def get_queryset(self):
        # TODO Currently getting user id from variable / django builtin auth, need to switch to @VV1S version of auth
        # user_id = self.request.user.id
        user_id = 1
        if user_id is not None:
            user_events = UserEvents.objects.select_related('owner_id').filter(owner_id=user_id)
            shopping_carts = ShoppingCart.objects.select_related('id_event').filter(id_event__in=user_events)
            queryset = CartGifts.objects.select_related('id_cart', 'id_gift').filter(id_cart__in=shopping_carts)
            return queryset


class CalendarViewSet(viewsets.ModelViewSet):
    serializer_class = UserEventsSerializer

    def get_queryset(self):
        # TODO Currently getting user id from variable / django builtin auth, need to switch to @VV1S version of auth
        # user_id = self.request.user.id
        user_id = 1
        queryset = UserEvents.objects.all().order_by('id')
        # TODO filtering is done by query params, if it's not ok then we need to find out how to filter by /year/month
        calendar_year = self.request.query_params.get('year')
        calendar_month = self.request.query_params.get('month')
        print(calendar_month, calendar_year)
        if calendar_year and calendar_month and user_id is not None:
            queryset = queryset.filter(
                Q(date__year=calendar_year) & Q(date__month=calendar_month) & Q(owner_id=user_id)
            )
        return queryset


class ProductsViewSet(viewsets.ModelViewSet):
    serializer_class = GiftsSerializer

    def get_queryset(self):
        queryset = Gifts.objects.all().order_by('id')
        # TODO currently only one example to filter by query params - store_id
        store_id = self.request.query_params.get('storeid')
        if store_id is not None:
            queryset = queryset.filter(store_id=store_id)
        return queryset

    def post(self, request, *args, **kwargslf):
        data = {
            'name': request.data.get('name'),
            'price': request.data.get('price '),
            'store_id': request.data.get('store_id'),
            'picture': request.data.get('picture'),
        }
        serializer = UserEventsSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class Friend(viewsets.ViewSet):
    serializer_class = FriendSerializer

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data.get('user')
            friend = serializer.validated_data.get('friend')
            status_request = serializer.validated_data.get('status')
            if user == friend:
                return Response({'error': 'User and friend cannot be the same'}, status=status.HTTP_400_BAD_REQUEST)
            if user.id < 1 or friend.id < 1:
                return Response({'error': 'User and friend IDs cannot be less than 1'}, status=status.HTTP_400_BAD_REQUEST)
            new_friendship = FriendList.objects.create(user=user, friend=friend, status=status_request)
            new_friendship.save()
            return Response({'success': 'Friendship created successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk=None):
        try:
            friend = FriendList.objects.get(pk=pk)
        except FriendList.DoesNotExist:
            return Response({'error': 'Friendship does not exist'}, status=status.HTTP_404_NOT_FOUND)

        serializer = self.serializer_class(friend, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'success': 'Friendship updated successfully'}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        try:
            friend = FriendList.objects.get(pk=pk)
            if friend.status != 'accepted':
                raise Exception('Users are not friends')
        except FriendList.DoesNotExist:
            return Response({'error': 'Friendship does not exist'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

        friend.delete()
        return Response({'success': 'Friendship deleted successfully'}, status=status.HTTP_200_OK)



class FriendListView(viewsets.ViewSet):
    serializer_class = FriendListSerializer

    def retrieve(self, request, pk=None):
        users_data = FriendList.objects.select_related('friend').filter(status='accepted', user_id=pk)

        # Convert the QuerySet to a list of dictionaries
        friend_list = [
            {
                'id': user_data.friend.id,
                'name': user_data.friend.name,
                'surname': user_data.friend.surname,
                'email': user_data.friend.email,
            }
            for user_data in users_data
        ]

        serializer = self.serializer_class(friend_list, many=True, partial=True)

        return Response(serializer.data)


def get_random_records(model, num_records):
    # Get a queryset of all the records in the model
    records = model.objects.all()
    # Order the records randomly
    random_records = records.order_by('?')[:num_records]
    return random_records

class GiftDiscover(viewsets.ViewSet):
    serializer_class = GiftsSerializer

    def list(self, request):
        random_gifts = get_random_records(Gifts, 3)
        serializer = self.serializer_class(random_gifts, many=True)
        return Response(serializer.data)


class IncomingGifts(viewsets.ViewSet):
    serializer_class = IncomingGiftsSerializer

    def retrieve(self, request, pk=None):
        today = datetime.date.today()
        start_date = today
        end_date = today + datetime.timedelta(days=90)
        shopping_carts = ShoppingCart.objects.select_related('id_event').filter(id_event__date__range=(start_date, end_date), id_event__owner_id=pk).order_by('id_event__date')[:10]

        # Convert the QuerySet to a list of dictionaries
        shopping_carts_list = [
            {
                'id': shopping_cart.id,
                'id_event': shopping_cart.id_event.id,
                'due_date': shopping_cart.due_date,
                'completed': shopping_cart.completed,
                'tittle': shopping_cart.id_event.tittle,
                'description': shopping_cart.id_event.description,
                'date': shopping_cart.id_event.date,
                'created_at': shopping_cart.id_event.created_at,
                'owner_id': shopping_cart.id_event.owner_id.id,
            }
            for shopping_cart in shopping_carts
        ]

        # Serialize the data
        serializer = self.serializer_class(shopping_carts_list, many=True)

        return Response(serializer.data)


@require_POST
def login_view(request):
    data = json.loads(request.body)
    username = data.get('username')
    password = data.get('password')

    if username is None or password is None:
        return JsonResponse({'detail': 'Please provide username and password.'}, status=400)

    user = authenticate(username=username, password=password)

    if user is None:
        return JsonResponse({'detail': 'Invalid credentials.'}, status=400)

    login(request, user)
    return JsonResponse({'detail': 'Successfully logged in.'})


def logout_view(request):
    if not request.user.is_authenticated:
        return JsonResponse({'detail': 'You\'re not logged in.'}, status=400)

    logout(request)
    return JsonResponse({'detail': 'Successfully logged out.'})


@ensure_csrf_cookie
def session_view(request):
    if not request.user.is_authenticated:
        return JsonResponse({'isAuthenticated': False})

    return JsonResponse({'isAuthenticated': True})


def whoami_view(request):
    if not request.user.is_authenticated:
        return JsonResponse({'isAuthenticated': False})

    return JsonResponse({'username': request.user.username})
