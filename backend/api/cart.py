from django.http import JsonResponse
from django.shortcuts import redirect, render
from django.contrib import messages

from .models import CartGifts, ShoppingCart

def addtocart(request):
    if request.method == 'POST':
        id_gift =int(request.POST.get('id_gift'))
        product_check = CartGifts.objects.get(id_gift = id_gift)
        if(product_check):
            if(ShoppingCart.objects.filter(id = request.id, id_event = request.id_event)):
                return JsonResponse({'status': "Product already in cart"})
            else:
                prod_qty = int(request.POST.get('product_qty'))
                if product_check.quantity >= prod_qty:
                    CartGifts.objects.create(id_cart=request.id_cart, id_gift = id_gift, product_qty = prod_qty)
                    return JsonResponse({'status': "Product added successfully"})
                else:
                    return JsonResponse({'status': "Only" + str(product_check.quantity) + " available"})
        else:
            return JsonResponse({'status': "No such product found!"})


    return redirect('/')

def viewcart(request):
    cart = ShoppingCart.objects.filter(id_event=request.id_event)
    context = {'cart':cart}
    return render(request, 'cart.html', context)

def updatecart(request):
    if request.method == "POST":
        if(ShoppingCart.objects.filter(id_event = request.id_event)):
            prod_qty = int(request.POST.get('product_qty'))
            cart = CartGifts.objects.get(id_gift = request.id_gift)
            cart.product_qty = prod_qty
            cart.save()
            return JsonResponse({'status': "Updated Successfully!"})
    return redirect('/')

def deletecartitem(request):
    if request.method == 'POST':
        if(ShoppingCart.objects.filter(id_event = request.id_event)):
            cartitem = CartGifts.objects.get(id_gift = request.id_gift)
            cartitem.delete()
            return JsonResponse({'status': "Deleted Successfully!"})
    return redirect('/')

