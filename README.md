### Laporan Praktikum-4

|  | Pemrograman Berbasis Framework 2024 |
|--|--|
| NIM |  2141720166|
| Nama |  Raihan Dany Radhinnur |
| Kelas | TI - 3I |

## Practicum - 1 
Practicum Prove
|![Screenshot](assets-report/04-jawaban-soal1-a.PNG)
|![Screenshot](assets-report/04-jawaban-soal1-b.PNG)

## Practicum - 2
|![Screenshot](assets-report/04-jawaban-soal2-a.PNG)
|![Screenshot](assets-report/04-jawaban-soal2-b.PNG)

Answer :
    In practicum 2, what happens is that the "Order" button is added, but we can define this by importing 2 components. but need to use "{componet-name}". And we can also define the contents of the "Button-2" component in "page.tsx" but by defining the variables "Message Contents" and "Button Name" first.

## Practicum - 3
|![Screenshot](assets-report/04-jawaban-soal3-a.PNG)
|![Screenshot](assets-report/04-jawaban-soal3-b.PNG)
|![Screenshot](assets-report/04-jawaban-soal3-c.PNG)

## Practicum - 4
|![Screenshot](assets-report/04-jawaban-soal3-a.PNG)
|![Screenshot](assets-report/04-jawaban-soal3-a2.PNG)
|![Screenshot](assets-report/04-jawaban-soal3-a3.PNG)
|![Screenshot](assets-report/04-jawaban-soal3-a4.PNG)
|![Screenshot](assets-report/04-jawaban-soal3-a5.PNG)

Answer : The error show when we try to push button "Artikel Selanjutnya" for 5 times. After 5 page above show form 'article.tsx' in data folder. This will error will shown the image.

To solve the problem i change the code of function handleClick():
|![Screenshot](assets-report/04-jawaban-soal4-error2.PNG)
because the function of handleClick() is called whenever the button is clicked. The function receives an event object as its argument and the event object of this code is to move to next aritcle list but the problem it don't have the exact limit, and i think react need defined limit. 
The solved code will be like this:
|![Screenshot](assets-report/04-jawaban-soal4-solved1.PNG)
|![Screenshot](assets-report/04-jawaban-soal4-solved2.PNG)