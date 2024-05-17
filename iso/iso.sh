#!/bin/bash
1.
echo se han pasado $# parámetros
echo El primer parámetro es:$1
echo El segundo parámetro es:$2

2.
if [ [ $# -lt 1  ] ] then
echo Error, hay que introducir al menos un parámetro
fi

3.
suma=( ( $1 + $2))
resta= ( ( $1 - $2))
prod= ( ( $1 * $2))
mod= ( ( $1 % $2))

echo El resultado de la suma es:$suma
echo El resultado de la resta es:$resta
echo El resultado de la multiplicación es:$prod
echo El resultado del modulo es:$mod


4.
num1=$1
num2=2

if [ $num1 -gt  $num2] ; then
echo "El mayor numero es :$1"
elif [ $num1 -gt $num2 ]; then 
echo "El mayor número es: $num2"
else 
echo "Los dos numeros son iguales"
fi



5.
for ( ( i=1; $i <=10; i++ ) ); dos
#verifico si es par o impar
if [[ $((%i % 2))-eq 0 ]]
echo "El $i numero es par"
else 
echo "El $i numero es impar"
fi
done



6.
for ((i=0; i<50; i++)); do
num=$(($i * 2))
echo $num
done


7.
if [ $# -ne 1]; then
echo "Error, necesito un parámetro"
else
echo "El directorio $1 no existe"
fi

directorio=$1
if [ -d "$directorio"]; then
echo "El directorio $directorio existe"
else 
echo "El directorio $directorio no existe"
fi


8.
if [ $# -ne 5 ]; then
   if [ $# -lt 5]; then
     echo "Faltan parámetros"
   else 
     echo "Sobran parámetros"
   fi
else
  for ((i=1, i<=5;i++)); do
    echo "El parámetro $i es ${!i}"
  done
 fi


 9.
 if[ $# -ne 1 ]; then
  echo "Uso: $0 <numéro>"
  exit 1
fi

numero=$1

numeroRandom=$(($RANDOM % numero + 1))
echo "Numero aleatorio entre 1 y $numero: $numeroRandom"


10.
a=$1
b=$2

suma=$(($a + $b))
resta=$(($a + $b))
prod=$(($a * $b))
div=$(($a / $b))
mod=$(($a % $b))
cuad=$(( ($a - $b) ** 2 ))

echo El resultado de la suma es:$suma
echo El resultado de la resta es:$resta
echo El resultado de la multiplicación es:$prod
echo El resultado de la divisio es:$div
echo El resultado del módulo es:$mod
echo El resultado del cuadrdao de la diferencia es:$cuad



