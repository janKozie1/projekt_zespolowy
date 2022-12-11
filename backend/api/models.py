from django.db import models

class Example(models.Model):
    exampleString = models.CharField(max_length=50)
    exampleInt = models.IntegerField()

    def __str__(self):
        return self.name
