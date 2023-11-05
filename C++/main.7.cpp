// #include <iostream>
// #include <string>

// using namespace std;

// int main(){

// string napis = "ABCDEFGHIJKLMNOPRSTUWYZ";

// int size = napis.length();

// cout<< size <<endl;

  
// for(int i = 0; i<=size-1;i++){
//   cout<<napis[i]<<endl;
//   }

// }



// #include <iostream>
// #include <string>

// using namespace std;

// int main() {

//   string napis = "oksarl";

//   if (napis[0] >= 65 && napis[0] <= 90) {
//     cout << "Ok wchodz" << napis[0];
//   } else {
//     cout << "nie Imie z dużej litery btw";
//   }
// }



// #include <iostream>
// #include <string>
// using namespace std;

// int main() {

//   string name = "OSKARpodrucki12345";

//   int dl = 0;
//   int ml = 0;
//   int c = 0;

//   int size = name.length();

//   cout << "Rozmiar " << size << endl;

//   for (int i = 0; i <= size - 1; i++) {
//     if (name[i] >= 65 && name[i] <= 90)
//       dl++;

//     if (name[i] >= 97 && name[i] <= 122)
//       ml++;

//     if (name[i] >= 48 && name[i] <= 57)
//       c++;
//   }
//   cout << "Ale łatwo: " << dl << endl;
//   cout << "Ale że essss: " << ml << endl;
//   cout << "Nie no łatfo: " << c << endl;
  
//   return 0;
// }

//to jest po to że jak jest w indeksie aby nie było wolnego miejsca
//mamy tablica któa składa sięz tylu znaków ile mamy indeksów w naszym opisie



// #include <iostream>
// #include <string>
// using namespace std;

// int main() {

//   string name = "Aneta";

//   int size = name.length();

//   if (name[size - 1] == 97 || 65) {
//     cout << "jest to imię żeńskie es";
//   } else {
//     cout << "to imię męskie :(";
//   }
// }



// #include <iostream>
// #include <string>

// using namespace std;

// int main() {

//   string name;
//   string lname;

//   cout << "Podaj swoje imię: ";
//   cin >> name;

// //   cout << "Podaj swoje nazwisko: ";
// //   cin >> lname;

// //   int size = name.length();
// //   int lsize = lname.length();

// //   cout << size << endl;
// //   cout << lsize << endl << endl;
  
// //   for (int i = 0; i <= size - 1; i++) {
// //     if (name[i] >= 97 && name[i] <= 122) {
// //       name[i] = name[i] - 32;

// //       cout << name[i++] << endl;
// //     }
// //   }

// //   for (int i = 0; i <= lsize - 1; i++) {
// //     if (lname[i] >= 97 && lname[i] <= 122) {
// //       lname[i] = lname[i] - 32;

// //       cout << lname[i++] << endl;
// //     }
// //   }
// // }

// #include <iostream>
// #include <string>

// using namespace std;

// int main(){

//   string napis = "ashdashfbxczkhiyweriowehrekaflsdhf";

//   int size = napis.length();

//   for(int i = 0; i <= size-1; i++){
//     if(napis[i]>=97 && napis[i]<=122){
//       napis[i]=napis[i]-32;
//     }
//   }
//   cout<<napis;
// }



// // #include <iostream>
// // #include <string>

// // using namespace std;

// // int main() {

// //   string im;
// //   string na;

// //   cout << "Podaj imię: ";
// //   cin >> im;

// //   cout << "Podaj nazwisko: ";
// //   cin >> na;

// //   int imsize = im.length();
// //   int nasize = na.length();

// //   cout<<imsize;
// //   cout<<nasize;
// //   for (int i = 0; i <= imsize-1; i++) {
// //   if (im[i] >= 97 && im[i] <= 122) {
// //      im[i] = im[i] - 32;
// //     cout<<im[i] <<endl;
// //     }
// //   }
// // }

// #include <iostream>
// #include <string>

// using namespace std;

// int main() {

//   string im = "Oskar";
//   string na = "Podrucki";

//   int imsize = im.length();
//   int nasize = na.length();

//   int roznice;

//   if (nasize > imsize) {
//     roznice = nasize - imsize;

//     for (int i = nasize; i >= imsize; i--) {
//       im[i] = 32;
//     }

//     for (int i = 0; i <= nasize; i++) {
//       cout << im[i] << " " << na[i] << endl;
//     }
//   }
// }



// #include <iostream>

// using namespace std;

// void print(string imie, int wiek) {

//   cout << "witaj: " << imie << endl;
//   cout << wiek << " lat" << endl;

//   int a = 5;
// }

// int main() {
//   string name;
//   int age;

//   cin>> name;

//   cin>> age;
//   print(name, age);
//   print(name, age);

//   int a = 10;
//   cout << a;
// }