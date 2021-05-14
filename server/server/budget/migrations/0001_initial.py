# Generated by Django 3.1.7 on 2021-03-10 18:09

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('app', '0006_auto_20210310_1809'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='ExpenseCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='IncomeCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Income',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.IntegerField(default=0)),
                ('description', models.TextField(default='', max_length=1000)),
                ('is_verified', models.BooleanField(default=False)),
                ('contragent', models.CharField(default='', max_length=255)),
                ('added_at', models.DateField(default=django.utils.timezone.now)),
                ('added_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='budget.incomecategory')),
                ('facility', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='app.facility')),
            ],
        ),
        migrations.CreateModel(
            name='Expense',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.IntegerField(default=0)),
                ('description', models.TextField(default='', max_length=1000)),
                ('is_verified', models.BooleanField(default=False)),
                ('contragent', models.CharField(default='', max_length=255)),
                ('added_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='budget.expensecategory')),
                ('facility', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='app.facility')),
            ],
        ),
    ]
