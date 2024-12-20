# Python Asoslari


Keling, `hello_world.py` faylida o‘zgaruvchidan foydalanishni o‘rganamiz. Fayl boshiga yangi qatordan kod qo‘shing va ikkinchi qatorni quyidagicha o‘zgartiring:

```python
# hello_world.py
message = "Hello Python world!"
print(message)
```

Dasturni ishga tushiring va natijani ko‘ring. Siz quyidagicha natija olasiz:

```
>>> Hello Python world!
```

Bu yerda biz `message` nomli o‘zgaruvchini qo‘shdik. Har bir o‘zgaruvchi biror qiymat bilan bog‘langan bo‘ladi. Bu misolda qiymat — bu matn: `"Hello Python world!"`.

Python dasturi birinchi qatorni qayta ishlaganda, `message` o‘zgaruvchisini matn qiymati bilan bog‘laydi. Ikkinchi qatorga kelganda, ushbu o‘zgaruvchiga bog‘langan qiymat ekranga chop etiladi.

---

## Matn (String) Tushunchasi

Dasturlashda turli ma’lumotlarni qayta ishlash uchun ularni turlarga ajratish muhim. Ma’lumot turlaridan biri bu matn (“string“) hisoblanadi. Matn — bu belgilar ketma-ketligi bo‘lib, Python uni qo‘shtirnoqlar orasida aniqlaydi. Masalan:

```python
"Bu matn."
'Bu ham matn.'
```

Python matnni yozishda qo‘shtirnoqlar yoki apostroflardan foydalanishga imkon beradi. Bu orqali matn ichida qo‘shtirnoq yoki apostroflarni ishlatish osonlashadi:

```python
'I told my friend, "Python is my favorite language!"'
"The language 'Python' is named after Monty Python."
"One of Python's strengths is its diverse and supportive community."
```

### Matnning Ko‘rinishini O‘zgartirish

Matnlar bilan ishlashning eng oddiy usullaridan biri uning harflarining ko‘rinishini o‘zgartirishdir. Quyidagi kodni ko‘rib chiqing:

```python
name = "men Dasturchiman"
print(name.title())  # Har bir so‘z bosh harf bilan yoziladi
print(name.upper())  # Barcha harflar katta qilinadi
print(name.lower())  # Barcha harflar kichik qilinadi
```

Ushbu kodni ishga tushirganda quyidagi natijani ko‘rasiz:

```
>>> Men Dasturchiman
>>> MEN DASTURCHIMAN
>>> men dasturchiman
```

### Eslatma:
- Xatolarni kuzatish uchun traceback qismini diqqat bilan o‘qing.

Bu metodlar yordamida matnni foydalanuvchiga qulay ko‘rinishda taqdim qilish mumkin.

### O‘zgaruvchilarni Matn Ichida Ishlatish

Ba’zan matn ichida o‘zgaruvchi qiymatlarini ishlatish talab qilinadi. Masalan, foydalanuvchining to‘liq ismini yaratish:

```python
first_name = "ada"
last_name = "lovelace"
full_name = f"{first_name} {last_name}"
print(f"Salom, {full_name}!")
```

Yuqoridagi kodda `f"..."` yozuvi matn ichida o‘zgaruvchi qiymatlarini ishlatish uchun kerak. Python o‘zgaruvchining qiymatini matnga qo‘shib beradi. Natija quyidagicha bo‘ladi:

```
>>> Salom, ada lovelace!
```

F-string usuli sodda va qulay bo‘lib, kodni o‘qishni osonlashtiradi.

---

## O‘zgaruvchilarni Nomlash Qoidalari

Pythonda o‘zgaruvchilar bilan ishlayotganda quyidagi qoidalarga rioya qiling:

- O‘zgaruvchi nomlari faqat harflar, raqamlar va pastki chiziqdan (`_`) iborat bo‘lishi mumkin. Nomi harf yoki pastki chiziq bilan boshlanishi kerak, lekin raqam bilan boshlanmasligi kerak.
  - Masalan: `message_1` to‘g‘ri, lekin `1_message` noto‘g‘ri.
- O‘zgaruvchi nomida bo‘sh joylar bo‘lmasligi kerak. Masalan: `greeting_message` to‘g‘ri, lekin `greeting message` xato beradi.
- Pythonning ajratilgan so‘zlari yoki funksiyalari nomlarini ishlatmang. Masalan, `print` o‘zgaruvchi nomi bo‘lishi mumkin emas.
- Nomi qisqa va mazmunli bo‘lishi kerak. Masalan: `name` yaxshi, lekin `n` nomi tushunarsiz bo‘lishi mumkin.
- Kichik `l` va katta `O` harflariga ehtiyot bo‘ling, chunki ular `1` va `0` raqamlariga o‘xshab ko‘rinishi mumkin.

Mazmunli nomlar tanlash kodni tushunishni osonlashtiradi.

---

## Xato Nomi (NameError)dan Qochish

Quyidagi kodda xato chiqaramiz va uni tuzatishni o‘rganamiz. Kodingizga quyidagicha yozing:

```python
message = "Hello Python Crash Course reader!"
print(mesage)  # E'tibor bering, "message" noto‘g‘ri yozilgan
```

Python xato topganda, "traceback" (xato izi) beradi. Bu sizga qayerda muammo borligini ko‘rsatadi:

```
Traceback (most recent call last):
  File "hello_world.py", line 2, in <module>
    print(mesage)
NameError: name 'mesage' is not defined. Did you mean: 'message'?
```

Xatoni to‘g‘rilash uchun quyidagi kodni ishlating:

```python
message = "Hello Python Crash Course reader!"
print(message)
```

Endi kod muvaffaqiyatli ishlaydi:

```
>>> Hello Python Crash Course reader!
```

### Eslatma:
- Xatolarni kuzatish uchun traceback qismini diqqat bilan o‘qing.

---

## Mashqlar

Quyidagi mashqlarni bajarib, o‘zgaruvchilar va matnlar bilan ishlashni mustahkamlang:

1. **Oddiy Xabar:** O‘zgaruvchiga biror xabarni tayinlang va uni chop eting.
2. **Xabarlarni O‘zgartirish:** O‘zgaruvchiga xabarni tayinlang, chop eting. So‘ng, o‘zgaruvchini yangi qiymat bilan o‘zgartiring va yangi qiymatni chop eting.
3. **Matnning Ko‘rinishini O‘zgartirish:** Matnni bosh harf bilan, katta harf bilan va kichik harf bilan chop eting.
4. **F-Stringlar bilan Xabar Yaratish:** O‘zgaruvchilarni f-stringlar yordamida birlashtirib, xabar chop eting.

---

Matnlar bilan ishlashni chuqurroq tushunish uchun amaliyot qilishda davom eting va yangi kodlarni sinab ko‘ring.

