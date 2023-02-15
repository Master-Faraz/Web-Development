#include <stdio.h>
int main()
{
    int num = 0 , counter = 0 , res = 0;

    while (num >= 0)
    {
        scanf("%d", &num);
        counter = counter + 1;
        res = res + num;

        if (counter == 2 && num != -1)
        {
            printf("%.1f ", (float)res / 2);
            res = num;
            counter = 1;
        }
    }

    return 0;
}