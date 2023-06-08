from django.db import models

# Create your models here.

class Client(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    birth_date = models.DateField()
    dni = models.CharField(max_length=20, default='Valor predeterminado')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name