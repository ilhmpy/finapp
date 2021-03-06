# Generated by Django 3.1.7 on 2021-05-20 19:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0011_auto_20210325_2033'),
    ]

    operations = [
        migrations.CreateModel(
            name='Scan',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type_scan', models.CharField(choices=[('1', 'Накладная'), ('2', 'Расходы'), ('3', 'Сканы'), ('4', 'Уставные Документы')], default='1', max_length=255)),
                ('added_at', models.DateField(auto_now_add=True)),
                ('name', models.CharField(default='', max_length=255)),
                ('file', models.FileField(upload_to='')),
                ('facility', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='app.facility')),
            ],
        ),
    ]
