# Generated by Django 3.1.7 on 2021-03-10 17:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_income_added_at'),
    ]

    operations = [
        migrations.RenameField(
            model_name='income',
            old_name='added_at',
            new_name='date',
        ),
        migrations.RemoveField(
            model_name='revenue',
            name='added_at',
        ),
        migrations.AlterField(
            model_name='revenue',
            name='date',
            field=models.DateField(auto_now_add=True),
        ),
    ]
