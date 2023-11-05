// ### 1

/*

#include <iostream>

using namespace std;

int main() {

  string name = " ";
  string nazwisko = " ";
  int wiek = 0;
  int rokUrodzenia = 0;

  cout << "Podaj imię: " << endl;
  cin >> name;

  cout << "Podaj nazwisko: " << endl;
  cin >> nazwisko;

  cout << "Podaj wiek: " << endl;
  cin >> wiek;

  rokUrodzenia = 2022 - wiek;

  cout << "Witaj " << name << " " << nazwisko << "!" << endl;
  cout << "Wiem że masz " << wiek << " lat" << endl;
  cout << "I urodziłeś się w " << rokUrodzenia << " roku!" << endl;
  cout << "Rozpocząłeś naukę w " << rokUrodzenia + 6 << "roku!";
}

*/


// ### 2

// napisz program o pełnoletności bo na lekcjii coś ci nie działało

/*

#include <iostream>

using namespace std;

int main()
{

int wiek = 0;

cout<<"Podaj wiek aby sprawdzić czy jesteś pełnoletni: "<<endl;
cin >> wiek;

if (wiek>=18){
  cout<<"Jesteś pełnoletni"<<endl;
}
else {
  cout<<"Nie jesteś pełnoletni"<<endl;
}

return 0;
}

*/


// ### 3

/*

#include <iostream>

using namespace std;

int main()
{

double l1 = 0;
double l2 = 0;

cout << "Podaj liczbę 1" <<endl;
cin >> l1;

cout << "Podaj liczbę 2" <<endl;
cin >> l2;

if (l1>l2){
  cout<<"Liczba "<<l1<<" jest większa od "<<l2<<" "<<endl;
  }
else if (l1<l2){
  cout<<"Liczba "<<l1<<" jest mniejsza od "<<l2<<" "<<endl;
  }
else{
  cout<<"Podane liczby są równe"<<endl;
  }

}

*/


// ### 4

/*

#include <iostream>

using namespace std;

int main() {

  int dT = 0;

  cout << "Podaj liczbę od 1 do 7" << endl;
  cin >> dT;

  if (dT==1){
  cout<<"Jest Poniedziałek"<<endl;
  }
  else if (dT==2){
  cout<<"Jest Wtorek"<<endl;
  }
  else if (dT==3){
  cout<<"Jest Środa"<<endl;
  }
  else if (dT==4){
  cout<<"Jest Czwartek"<<endl;
  }
  else if (dT==5){
  cout<<"Jest Piątek"<<endl;
  }
  else if (dT==6){
  cout<<"Jest Sobota"<<endl;
  }
  else if (dT==7){
  cout<<"Jest Niedziela"<<endl;
  }
  else {
  cout<<"Zła liczba"<<endl;
  }

  return 0;
}

*/


// ### 5

/*
#include <iostream>

using namespace std;

int main(){

  int liczba = 0;     

  cin>>liczba;

  // || = or
  // && = and

  if ((liczba>=5 && liczba<=10) || liczba%2==0){
    cout<<"Prawda";
  }
  else {
    cout<<"Fałsz";
  }
}
*/

//sprwadza wartości logiczne 


// ### 6

/*

#include <iostream>

using namespace std;

int main() {

  string name = " ";
  string nazwisko = " ";
  int wiek = 0;
  int rokUrodzenia = 0;

  cout << "Podaj imię: " << endl;
  cin >> name;

  cout << "Podaj nazwisko: " << endl;
  cin >> nazwisko;

  cout << "Podaj wiek: " << endl;
  cin >> wiek;

  rokUrodzenia = 2022 - wiek;

  cout << "Witaj " << name << " " << nazwisko << "!" << endl;
  cout << "Wiem że masz " << wiek << " lat" << endl;
  cout << "I urodziłeś się w " << rokUrodzenia << " roku!" << endl;
  cout << "Rozpocząłeś naukę w " << rokUrodzenia + 6 << "roku!";
}

*/


// ### PRACA DOMOWA

/*
#include <iostream>

using namespace std;

string dt = " ";
double gdz = 0;

int main(){

  cout<<"Witaj Obywatelu!" <<endl <<endl <<endl; 
  cout<<"Właśnie otworzyłeś program sprawdzający czy Pewex znajdujący się na terenie Mińska Mazowieckiego jest otwarty!" <<endl <<endl <<endl;
  cout<<"INSTRUKCJA:  1. Wpisz dzień tygodnia np. wtorek  2. Wpisz godzinę np. 10, 11, 15" <<endl <<endl;

  cout<<"Podaj dzień tygodnia: "<<endl;
  cin >> dt;

  if(dt=="Wtorek" || dt=="Środa")
  {
   cout<<"Pewex jest otwarty w ten dzień"<<endl <<endl;
   cout<<"Podaj godzinę: "<<endl;
   cin >> gdz;
   
    if(gdz>=10 && gdz<=20)
   {
     cout<<"Pewex jest otwarty o tej godzinie";
   }
    else
  {
     cout<<"Pewex nie jest otwarty o tej godzinie";
  }
    
  }
  else
  {
    cout<<"Pewex nie jest otwarty w ten dzień";
  }

  
  return 0;
}
*/
