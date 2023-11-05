// #include <iostream>

// using namespace std;

// int main() {

//   int x, y = 0;

//   cout << "Podaj x: ";
//   cin >> x;

//   cout << "Podaj y: ";
//   cin >> y;

//   if (x > y) {
//     cout << "Liczba " << x << " jest większa od liczby " << y << ".";
//   } else if (x < y) {
//     cout << "Liczba " << x << " jest mniejsza od liczby " << y << ".";
//   } else {
//     cout << "Podane liczby są równe";
//   }
// }



// #include <iostream>

// using namespace std;

// int main() {

//   int n, m;

//   cout << "Podaj n: ";
//   cin >> n;

//   cout << "Podaj m: ";
//   cin >> m;

//   for (int i = n; i <= m; i++) {

//     cout << i;

//     if (i % 2 == 0) {
//       cout << "p";
//     }
//     if (i < m) {
//       cout << ", ";
//     }
//   }
//   return 0;
// }



// #include <iostream>

// using namespace std;

// int main(){

//   int l;
//   int s;

//   cout<<"Podaj l: ";
//   cin>>l;

//   s=+l;

//   if(s%2==0){
//    cout<<"Aktualna suma to: "<<s<<", suma ta jest parzysta jupiii";
//     return 0;
//   }else if(s%2==1){
//   cout<<"Aktualna suma to: "<<s<<", suma ta nie jest parzysta :((("<<endl;
//   }
//   while(s%2!=0){
//     cout<<"Podaj l: ";
//   cin>>l;

//   s=s+l;

//   if(s%2==0){
//    cout<<"Aktualna suma to: "<<s<<", suma ta jest parzysta jupiii";
//     return 0;
//   }else if(s%2==1){
//   cout<<"Aktualna suma to: "<<s<<", suma ta nie jest parzysta :((("<<endl;
//   }
//   }
// }



// #include <iostream>

// using namespace std;

// int main(){

//   int tablica[5];
//   int il = 5;
//   double srwt;
  
//   for(int i = 0; i<=4; i++){
//     cout<<"Podaj liczbę: ";
//     cin>>tablica[i];
//   }
//   for(int i = 0; i<=4; i++){
//     cout<<tablica[i]<<endl;
//   }
  
//   srwt = (tablica[0] + tablica[1] + tablica[2] + tablica[3] + tablica[4]) / il;
//   cout<<"Średnia liczb w tablicy wynosi: "<<srwt<<". Dziękuję za uwagę.";

  
// }