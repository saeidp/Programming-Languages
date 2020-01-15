#include <iostream>
using namespace std;

enum daysOfWeek
{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
};

int main()
{
    daysOfWeek today;
    today = Thursday;
    cout << "This is day " << today << " of the week";
    return 0;
}