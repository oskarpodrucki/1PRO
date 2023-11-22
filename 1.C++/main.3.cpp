// ### 1
/*
#include <iostream>

using namespace std;

int main()
{
  for (int i = 1; i<=10; i++){
    cout<<i;
    if(i<10){
      cout<<", ";
    }
  }
  
}
*/


// ### 2
/*
#include <iostream>

using namespace std;

int main()
{
  
  
  for (int i = 1; i<=10; i++){
    cout<<i <<endl;
    if(i % 2 == 0){
    cout<<"p";
  }
    if(i<10){
      cout<<", ";
    }
  
  }
  
}
*/


// ### 3
/*

#include <iostream>

using namespace std;

int main(){

  int x,y;

  cout<<"Podaj pierwszą liczbę: "<<endl;
  cin>>x;

  cout<<"Podaj drugą liczbe: "<<endl;
  cin>>y;

  for(int i=x ; i<=y; i++){
    cout<<i;
  if(i<y){
    cout<<", ";
  }
  }
  

  return 0;
}

*/


// ### 4
/*
#include <iostream>

using namespace std;

int main(){

  int x,y,n = 0;

  cout<<"x: "<<endl;
  cin>>x;

  cout<<"y: "<<endl;
  cin>>y;

  cout<<"n: "<<endl;
  cin>>n;

  for(int i=x; i<=y; i++){
    
  if(i % n == 0){
    cout<<i;
  }
  
  if(i % n-1 == 0){
    cout<<", ";
  }
  }
  
  
  
}
*/


// ### 5
/*
#include <iostream>

using namespace std;

int main() {

  int x, y;

  cout << "x: ";
  cin >> x;

  cout << "y: ";
  cin >> y;

  for (int i = x; i >= y; i--) {
    cout << i << endl;
  }

  return 0;
}
*/


// ### 6
/*
#include <iostream>

using namespace std;

int main() {

  string pl = " ";
  int x, y;

  cout << "pl: ";
  cin >> pl;

  cout << "x: ";
  cin >> x;

  cout << "y: ";
  cin >> y;

  if (pl == "+") {

    for (int i = x; i <= y; i++) {
      cout << i << endl;
    }
    }
    else {
      cout << "BŁĄD. PROSZĘ PODAĆ + lub -";
  }

  if (pl == "-") {

    for (int i = y; i >= x; i--) {
      cout << i << endl;
    }
    }
    else {
      cout << "BŁĄD. PROSZĘ PODAĆ + lub -";
  }

  return 0;
}
*/


// ### 7
/*
#include <iostream>

using namespace std;

int main()
{

int x;

cout<<"x: ";
cin>>x;

for(int i = 1; i<=x; i++){

for(int j=1; j<=x; j++){
  cout<<"O";
  }
  cout<<endl;
}
  return 0;

}
*/


// ### 8
/*
#include <iostream>

using namespace std;

int main()
{

int x;

cout<<"x: ";
cin>>x;

for(int i = 1; i<=x; i++){

for(int j=1; j<=x; j++){
  cout<<"O";
  }
  cout<<endl;
}
  return 0;

}
*/


// ### 9
/*
#include <iostream>

using namespace std;

int main()
{

  double x = 0;
  double y = 0;

  cout<<"Podaj x: "<<endl;
  cin>>x;

  cout<<"Podaj y: "<<endl;
  cin>>y;

  if(x>y)
  {
    cout<<"Liczba " <<x<< " jest większa od liczby " <<y<<" ";
  }
  else if(x<y)
  {
    cout<<"Liczba " <<x<< " jest mniejsza od liczby " <<y<<" ";
  }
  else
  {
    cout<<"Obie liczby są równe";
  }

  return 0;
  
}
*/

// ### 10
/*
#include <iostream>

using namespace std;

int main()
{

int x;

cout<<"x: ";
cin>>x;

for(int i = 1; i<=x; i++){

for(int j=1; j<=x; j++){
  cout<<"O";
  }
  cout<<endl;
}
  return 0;

}
*/