// #include <iostream>
// #include <string>

// using namespace std;

// int d(int a, int b){

//   int c = 10;
//   int d = 15;

  
//   return c;
  
// }

// int main(){

//   cout<<d(25,10);
// }



// #include <iostream>
// #include <string>

// using namespace std;

// double d(int a + int b){
//   return a+b;
// }

// double o(int a - int b){
//   return a-b;
// }

// double m(int a * int b){
//   return a * b;
// }

// double dz(int a / int b){
//   return a / 2;
// }

// int main(){
  
//   string k = " ";

//   double a, b;
  
//   cout<<"Co chcesz zrobić? :"<<endl;
//   cin>>k;

//   if(k = dodawanie){
//     cout<<"Podaj a: ";
//     cin>>a;
//     cout<<"Podaj b: ";
//     cin>>b;
    
//     d(a, b);
//     wynik = d(a, b);
//     cout<<"WYNIK TO: "<<wynik<<;
//   }else if(k = odejmowanie){
//     cout<<"Będziemy odejmować"<<endl;
//     cout<<"Podaj a: ";
//     cin>>a;
//     cout<<"Podaj b: ";
//     cin>>b;
    
//     d(a, b);
//     wynik = d(a, b);
//     cout<<"WYNIK TO: "<<wynik<<;
//   }
// }

// dokończ es



// #include <iostream>
// #include <string>

// using namespace std;

// bool spr(string a){
  
// if(a[0]>=65 && a[0]<=90){
//   return true;
// }else return false;

// }

// int main(){

//   cout<<spr("asdfdsa");
  
//   if(spr("Abcd")){
//     cout<<"Prawda";
//   }else cout<<"Fałsz";
  
// }



// #include <iostream>
// #include <string>

// using namespace std;

// int ml(string a){

//   int ml = 0;
//   int size = a.length();
  
//   for (int i = 0; i <= size - 1; i++){
//   if (a[i] >= 97 && a[i] <= 122)
//   ml++;
//   }
//   return ml;
// }

// int wsz(string b){

//   int wsz;
//   int size = b.length();

//   wsz = size;
//   return wsz;
// }

// int main(){
  
//   cout<<ml("asdxcjhvhkljhweihhrwejhrwejhvbfasdhfkjasdbhflahsdilfyha;kjgjhdfjhvbxc,vnbz,murhqwrweertretert")<<endl;
//   cout<<wsz("ELObentzCOtamUcbesesesesseeseseseseseseseseSAEDASDASD");
// }



// #include <iostream> <string>

// using namespace std;

// bool sh(string a){

// int dl = 0;
// int ml = 0;
// int li = 0;
// int zs = 0;
  
// int size = a.length();

//   for(int i = 0; i <= size - 1; i++){
  
//     if(a[i]>=65 && a[i]<=90){
//   dl++;
// }

//   if(a[i]>=97 && a[i]<=122){
//   ml++;
// }
//   if(a[i]>=48 && a[i]<=57){
//   li++;
// }
//   if(a[i]>=33 && a[i]<=47){
//   zs++;
// }
// }

// cout << "Rozmiar " << size << endl;
// cout << "Duże litery " << dl << endl;
// cout << "Małe litery " << ml << endl;
// cout << "Liczby " << li << endl;
// cout << "Znaki specjalne " << zs << endl;

// if(size>=8 && dl>=1 && ml>=1 && li>=1 && zs>=1){
//   return true;
// }else return false;


// }

// int main(){

//   if(sh("Ci4stK0Poż3czk0^^e")){
//     cout<<"POPRAWNE HASŁO";
//   }else cout<<"NIEPOPRAWNE HASŁO";
// }