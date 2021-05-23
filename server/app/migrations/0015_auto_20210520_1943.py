# Generated by Django 3.1.7 on 2021-05-20 16:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0014_auto_20210514_2109'),
    ]

    operations = [
        migrations.RenameField(
            model_name='scan',
            old_name='type',
            new_name='type_scan',
        ),
        migrations.AddField(
            model_name='scan',
            name='facility',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='app.facility'),
        ),
    ]