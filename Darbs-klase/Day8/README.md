day8 
klases darbs

#Vēstule
 s = """
    ...: GOdājamais x,
    ...: Jums ir pienācis naudas pārvedums
    ...: ar vērtību y EUR
    ...: Lai saņemtu džunguru, atsūtiet 
    ...: īsziņu uz tel. numuru z
    ...: 
    ...: Cieņā,
    ...: 
    
    ...: """

n [18]: t = "Summa = %s"

In [19]: t
Out[19]: 'Summa = %s'

In [20]: print(t)
Summa = %s

In [29]: t = "Summa = %s, valūta = %s"%(20000000,'EUR')

In [30]: t
Out[30]: 'Summa = 20000000, valūta = EUR'
_____________________
x="Jānis"
y="10000000000000"
z="+368 78934758947589"
c="""

GOdājamais %s,
Jums ir pienācis naudas pārvedums
ar vērtību %s EUR
Lai saņemtu džunguru, atsūtiet 
īsziņu uz tel. numuru %s un savu pases kopiju.

Cieņā,

       Labdaris
"""%(x, y, z)
print(c)
________

print("Vārds")
x=input()

print("Summa")
y=input()

print("telefona nummurs")
z=input()

c="""

Godājamais %s,
Jums ir pienācis naudas pārvedums
ar vērtību %s EUR
Lai saņemtu džunguru, atsūtiet 
īsziņu uz tel. numuru %s un savu pases kopiju.

Cieņā,

       Labdaris
"""%(x, y, z)
print(c)
_______

def f(x, y, z):



  c="""

  Godājamais %s,
  Jums ir pienācis naudas pārvedums
  ar vērtību %s EUR
  Lai saņemtu džunguru, atsūtiet 
  īsziņu uz tel. numuru %s un savu pases kopiju.

  Cieņā,

        Labdaris
  """%(x, y, z)
  print(c)

f("Pēteris","10000000000", "232323232323")
______

In [17]: f = open("a.dat")

In [18]: f.tell()
Out[18]: 0

In [19]: f.readline()
Out[19]: '\n'

In [20]: f.readline()
Out[20]: '\\Esi sveicināts!\n'




