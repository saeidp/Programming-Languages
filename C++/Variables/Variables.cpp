// Variables.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
using namespace std;

void Chars()
{
    char myChar = 'A';
    char myOtherChar = 65;
    cout << "Value of myChar is: " << myChar << endl;
    cout << "Value of myOtherChar is: " << myOtherChar << endl;
}

void Floats()
{
    float myFloat;  // Creates a floating point variable
    myFloat = 8.3;  // Stores 8.3 in the new variable
    cout << "Value of myFloat is: " << myFloat << endl;
}

void Doubles()
{
    double myDouble;   // Created myDouble
    myDouble = 8.78;   // Stores 8.78 in myDouble
    cout << "Value of myDouble is: " << myDouble << endl;
}

void Booleans()
{
    bool canJump = false;
    bool canDo = true;
    cout << "Value of canJump is: " << canJump << endl;
    cout << "Value of canDo is: " << canDo << endl;
}

int main()
{
    std::cout << "Hello World!\n";
    short myVariableName1;  //bytes and  stores from -32768 to +32767
    short int myVariableName2;  //stores from -32768 to +32767
    signed short myVariableName3;  // stores from -32768 to +32767
    signed short int myVariableName4;  // stores from -32768 to +32767
    unsigned short myVariableName5;  // stores from 0 to +65535
    unsigned short int myVariableName6;  // stores from 0 to +65535
    int myVariableName7;  // stores from -32768 to +32767
    signed int myVariableName8;  // stores from -32768 to +32767
    unsigned int myVariableName9;  // stores from 0 to +65535

    // Long is a 32-bit number.

    long myVariableName10;  // stores from -2147483648 to +2147483647
    long int myVariableName11;  // stores from -2147483648 to +2147483647
    signed long myVariableName12;  // stores from -2147483648 to +2147483647
    signed long int myVariableName13;  // stores from -2147483648 to +2147483647
    unsigned long myVariableName14;  // stores from 0 to +4294967295
    unsigned long int myVariableName15;  // stores from 0 to +4294967295

    Chars();
    Floats();
    Doubles();
    Booleans();
}

