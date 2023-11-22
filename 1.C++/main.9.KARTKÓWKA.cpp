// #include <iostream>
// #include <string>

// using namespace std;

// int dl(string wyraz) {

//   int d = 0;
//   int size = wyraz.length();

//   for (int i = 0; i <= size; i++) {
//     if (wyraz[i] >= 65 && wyraz[i] <= 90) {
//       d++;
//     }
//   }
//   return d;
// }

// int main() {

//   string wyraz = " ";

//   cout << "Podaj wyraz: ";
//   cin >> wyraz;

//   cout << dl(wyraz);

//   return 0;
// }



// #include <iostream> 
// #include <string>

// using namespace std;

// string znm(string w){

//   int size = w.length();
  
//   if(w[0] >= 65 && w[0] <= 90){
//     w[0] = w[0] +  32;
//   }

//   if(w[size-1] >= 65 && w[size-1] <= 90){
//     w[size -1] = w[size -1] + 32;
//   }
//   return w;
// }

// int main(){
  
//   string w = " ";

//   cout<<"Podaj wyraz: ";
//   cin>>w;

// cout<< znm(w);

    

// }