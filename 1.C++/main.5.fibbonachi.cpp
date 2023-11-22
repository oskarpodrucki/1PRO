// Napisz program, który pobierał będzie kolejne elementy ciągu Fibonacciego do momentu dopóki użytkownik podawał będzie poprawne odpowiedzi lub suma poprawnych odpowiedzi wyniesie 10. 
//Podpowiedź: 1. n-ty wyraz ciągu jest sumą dwóch poprzednich
// 2. Należy wcześniej zapisać do tablicy kolejne elementy ciągu
// 2. Do sprawdzania odpowiedzi należy wykorzystać pętlę while

#include <iostream>

using namespace std;

int main(){

int tablica[10]{1,1,2,3,5,8,13,21,34,55};
int i = 0; //miejsce w tablicy
int lcf = 0; //liczba ciągu fibonnaciego
int p = 0; //punkty
int kl = 1; //która liczba

cout<<"KOD FIBONNACIEGO: GRA by Oskar Podrucki 1PRO"<<endl <<endl; 
cout<<"ZGADUJ KOLEJNE LICZBY W CIĄGU FIBONNACIEGO. ZA KAŻDĄ POPRAWNĄ ODPOWIEDZ ZDOBYWASZ 1 PUNKT. GRĘ KOŃCZYSZ GDY PODASZ ZŁĄ LICZBĘ LUB ZGADNIEJSZ 10 PIERWSZYCH LICZB"<<endl <<endl <<endl <<endl;
while(i != 10){

  cout<<"Podaj "<<kl<<" liczbę ciągu Fibonnaciego:"<<endl;
  cin>>lcf;

  if(lcf == tablica[i]){
    i++;
    p++;
    kl++;
    
    cout<<"GRATULUJĘ. Twoje punkty: "<<p<<""<<endl<<endl;
  }else{
    cout<<"KONIEC GRY. Poprawna odpowiedz to: "<<tablica[i]<<". Twój wynik to: "<<p<<""<<endl;
    return 0;
  }
}
}