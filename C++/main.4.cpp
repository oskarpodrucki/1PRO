/*
#include <iostream>

using namespace std;

int main() {

  int i = 0;
  
  while( i < 5 ){
    
  i++;
  cout<<i <<endl;
      
  }

  return 0;
}
*/



/*
#include <iostream>

using namespace std;

int main() {

  int a,b = 0;
  
  
  cout<<"Podaj 1 liczbę: " <<endl;
  cin>> a;
  
  cout<<"Podaj 2 liczbę: " <<endl;
  cin>> b; 
  
  
  while( a <= b ){
   
  
  cout<<a <<endl;
  a++;
    
  }

  return 0;
}
*/



/*
#include <iostream>

using namespace std;

int main(){

  int i = 0;
  cout<<"Podaj liczbę: "<<endl;
  cin >> i;

  while( i <= 10 ){

    cout<<"PRAWDA" <<endl;

  return 0;
  }

  
}
*/



/*
#include <iostream>
using namespace std;

int main()
{
    int i = 0;
    int s = 0;

    while (s<100) {

      cout<<"Podaj liczbę: "<<endl;
      cin>>i;
      cout<<"Podana liczba to: "<<i<<endl<<endl;

      s+=i;
      cout<<"Suma to : "<<s<<endl<<endl;

    }




    return 0;
}
*/



/*
// pobieranie liczby numer miesiąca
// użytkownik podaje ma tylko 3 próby na poprawne wpisane liczby

#include <iostream>

using namespace std;

int main() {

  int error = 0;
  int m = 0;
  
  while (m != 10) {

    cout << "Podaj numer miesiąca: " << endl << endl;
    cin >> m;

    if (m != 10) {
      error++;
      cout << "Podałeś zły numer miesiąca. Pozostałe próby: " << error << ""
           << endl;
    } 
    if(error == 3){
      return 0;
    }
  }
  cout<<"Podałeś właściwą liczbę";
}
*/



/*
#include <iostream>

using namespace std;

int main() {

int tablica[5] = {2,4,8,13,10000};
int index;


cout<<"Podaj index: "<<endl;
cin>>index;

cout<<tablica[index];

}
*/



/*
#include <iostream>

using namespace std;

int main() {

int tablica[5] = {2,4,8,13,10000};
int index;


cout<<"Podaj index: "<<endl;
cin>>index;
  

while(index <=4 ){

cout<<tablica[index]<<endl;
cout<<"Podaj index: "<<endl;
cin>>index;

  
}
return 0
}
*/



/*
#include <iostream>

using namespace std;

int main() {

  int tablica[5]; // = {4,7,1,6,24};
  int indeks;

  for (int i = 0; i <= 4; i++) {
    cout << "Podaj liczbę: ";
    cin >> tablica[i];
  }

  for (int i = 0; i <= 4; i++) {
    cout<<"Tablica["<<i<<"]="<<tablica[i] <<endl;
  }
}
*/



/*
#include <iostream>
using namespace std;

int main() {

  int tablica[10];

  tablica[0] = 1;
  tablica[1] = 1;

  for(int i=2; i<=9; i++){

  tablica[i]=tablica[i-1]+tablica[i-2];
    
  }

  for(int i=0; i<=9; i++){
    cout<<tablica[i]<<endl;
  }
}
*/
