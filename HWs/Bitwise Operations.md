# Bitwise Operationss

9:43
Noskatījos video-īsti nebija skaidrs kā veidojas skaitļu formāts
https://www.youtube.com/watch?v=PyfKCvHALj8

Jāpameklē vēl info

9:47

# What do the operators <<, >>, &, |, ~, and ^ do?
These are Python's bitwise operators.

Preamble: Twos-Complement Numbers
All of these operators share something in common -- they are "bitwise" operators. That is, they operate on numbers (normally), but instead of treating that number as if it were a single value, they treat it as if it were a string of bits, written in twos-complement binary. A two's complement binary is same as the classical binary representation for positve integers but is slightly different for negative numbers. Negative numbers are represented by performing the two's complement operation on their absolute value. So a brief summary of twos-complement binary is in order:

Two's Complement binary for Positive Integers:

0 is written as "0"
1 is written as "1"
2 is written as "10"
3 is "11"
4 is "100"
5 is "101"
.
.
1029 is "10000000101" == 2**10 + 2**2 + 2**0 == 1024 + 4 + 1
Two's Complement binary for Negative Integers:

Negative numbers are written with a leading one instead of a leading zero. So if you are using only 8 bits for your twos-complement numbers, then you treat patterns from "00000000" to "01111111" as the whole numbers from 0 to 127, and reserve "1xxxxxxx" for writing negative numbers. A negative number, -x, is written using the bit pattern for (x-1) with all of the bits complemented (switched from 1 to 0 or 0 to 1). So -1 is complement(1 - 1) = complement(0) = "11111111", and -10 is complement(10 - 1) = complement(9) = complement("00001001") = "11110110". This means that negative numbers go all the way down to -128 ("10000000").

Of course, Python doesn't use 8-bit numbers. It USED to use however many bits were native to your machine, but since that was non-portable, it has recently switched to using an INFINITE number of bits. Thus the number -5 is treated by bitwise operators as if it were written "...1111111111111111111011".

Whew! With that preamble out of the way (and hey, you probably knew this already), the operators are easy to explain:

The Operators:
x << y
Returns x with the bits shifted to the left by y places (and new bits on the right-hand-side are zeros). This is the same as multiplying x by 2**y.
x >> y
Returns x with the bits shifted to the right by y places. This is the same as //'ing x by 2**y.
x & y
Does a "bitwise and". Each bit of the output is 1 if the corresponding bit of x AND of y is 1, otherwise it's 0.
x | y
Does a "bitwise or". Each bit of the output is 0 if the corresponding bit of x AND of y is 0, otherwise it's 1.
~ x
Returns the complement of x - the number you get by switching each 1 for a 0 and each 0 for a 1. This is the same as -x - 1.
x ^ y
Does a "bitwise exclusive or". Each bit of the output is the same as the corresponding bit in x if that bit in y is 0, and it's the complement of the bit in x if that bit in y is 1.

* https://wiki.python.org/moin/BitwiseOperators *

9:58 Vēl pagaidām nesapratu. Meklēšu vēl info

Izskatās, ka binārās operācijas varētu saprast ja iedziļinātos kā veidojas binārie skaitļi.

10:24 Apskatu binārā koda atšifrējumu

![Tabula](https://lh3.googleusercontent.com/proxy/YvO7tqPS8ZYl-lp8hKrCG3PhbwHRSaSM6cp_IUSg7nhk4qlvyJyMHa7bpM7P8DtMO0LLb8W2UD7XYzQkGb8UoBF626wiEsAOFVtgtzaAjgToLAotliIc53eRR9tyMQ)

*https://lh3.googleusercontent.com/proxy/YvO7tqPS8ZYl-lp8hKrCG3PhbwHRSaSM6cp_IUSg7nhk4qlvyJyMHa7bpM7P8DtMO0LLb8W2UD7XYzQkGb8UoBF626wiEsAOFVtgtzaAjgToLAotliIc53eRR9tyMQ*

# Pārvēst bināros skaitļus Decimālajos

Lai kādu binārajā skaitīšanas sistēmā pierakstītu skaitli iegūtu decimālajā skaitīšanas sistēmā, tā ciparus reizina ar attiecīgajām divnieka pakāpēm, piemēram, ![attēls](https://wikimedia.org/api/rest_v1/media/math/render/svg/804a89c3db66ba10d1478b483f814cfb5acd02aa)

![attēls 2](https://wikimedia.org/api/rest_v1/media/math/render/svg/f82c21eabedd91293e4e653f5c6a107e41fe7a30)


