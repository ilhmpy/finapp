# Generated by Django 3.1.7 on 2021-05-28 05:28

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('accounts', '0002_delete_userrole'),
    ]

    operations = [
        migrations.CreateModel(
            name='Facility',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=255)),
                ('bank_name', models.CharField(default='', max_length=255)),
                ('correspondent_account', models.CharField(default='', max_length=255)),
                ('inn', models.CharField(default='', max_length=255)),
                ('bik', models.CharField(default='', max_length=255)),
                ('expense_account', models.CharField(default='', max_length=255)),
                ('comment', models.TextField(default='', max_length=10000)),
                ('is_active', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Importer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company_name', models.CharField(default='', max_length=255)),
                ('bank_name', models.CharField(default='', max_length=255)),
                ('correspondent_account', models.CharField(default='', max_length=255)),
                ('inn', models.CharField(default='', max_length=255)),
                ('bik', models.CharField(default='', max_length=255)),
                ('expense_account', models.CharField(default='', max_length=255)),
                ('production_type', models.CharField(default='', max_length=255)),
                ('custom_production_type', models.CharField(default='', max_length=255)),
                ('comment', models.TextField(default='', max_length=1000)),
                ('is_deleted', models.BooleanField(default=False)),
                ('facility', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='app.facility')),
            ],
        ),
        migrations.CreateModel(
            name='ProductionType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='UserFacility',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('facility', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.facility')),
                ('role', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.role')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Scan',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('scan_type', models.CharField(choices=[('1', '??????????????????'), ('2', '??????????????'), ('3', '??????????'), ('4', '???????????????? ??????????????????')], default='1', max_length=255)),
                ('added_at', models.DateField(auto_now_add=True)),
                ('name', models.CharField(default='', max_length=255)),
                ('file', models.FileField(upload_to='')),
                ('facility', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='app.facility')),
            ],
        ),
        migrations.CreateModel(
            name='Revenue',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('cash_income', models.IntegerField(default=0)),
                ('cash_free_income', models.IntegerField(default=0)),
                ('np', models.IntegerField(default=0)),
                ('tables', models.IntegerField(default=0)),
                ('guests', models.IntegerField(default=0)),
                ('added_at', models.DateField(default=django.utils.timezone.now)),
                ('added_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('facility', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='app.facility')),
            ],
        ),
        migrations.CreateModel(
            name='Invoice',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('added_at', models.DateField(default=django.utils.timezone.now)),
                ('invoice_number', models.IntegerField(default=0)),
                ('amount', models.FloatField(default=0)),
                ('tax_amount', models.FloatField(default=0)),
                ('comment', models.TextField(default='', max_length=10000)),
                ('payment_type', models.CharField(default='cash', max_length=255)),
                ('is_confirmed', models.BooleanField(default=False)),
                ('added_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('facility', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='app.facility')),
                ('importer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.importer')),
            ],
        ),
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(default='', max_length=255)),
                ('phone_number', models.CharField(default='', max_length=255)),
                ('subdivision', models.CharField(choices=[('1', '??????????????????????????'), ('2', '??????'), ('3', '??????????????????'), ('4', '??????????'), ('5', '?????????????????????? ????????????????')], default='1', max_length=255)),
                ('payment_type', models.CharField(choices=[('1', '??????????'), ('2', '?????????????????? ????????????'), ('3', '???????????????????? ????????????')], default='1', max_length=255)),
                ('pay_rate', models.IntegerField(default=0)),
                ('date_accepted', models.DateTimeField(auto_now_add=True)),
                ('birth_date', models.DateTimeField(auto_now_add=True)),
                ('address_residing', models.CharField(default='', max_length=255)),
                ('actual_address', models.CharField(default='', max_length=255)),
                ('comment', models.TextField(default='')),
                ('is_foreign', models.BooleanField(default=False)),
                ('profile_picture', models.ImageField(blank=True, default=None, null=True, upload_to='images/')),
                ('is_active', models.BooleanField(default=True)),
                ('date_fired', models.DateField(blank=True, null=True)),
                ('facility', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='app.facility')),
            ],
        ),
    ]
