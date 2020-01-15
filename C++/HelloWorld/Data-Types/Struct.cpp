#include <iostream>
using namespace std;

struct employee
{
    string name;
    float salary;
    int empId;
};

int main()
{
    employee emp;
    emp.name = "John";

    cout << "name is: " + emp.name;
}