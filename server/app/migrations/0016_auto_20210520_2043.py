# Generated by Django 3.1.7 on 2021-05-20 17:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0015_auto_20210520_1943'),
    ]

    operations = [
        migrations.RenameField(
            model_name='scan',
            old_name='date',
            new_name='added_at',
        ),
    ]
