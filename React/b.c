#include <stdio.h>
int main()
{
    int a, b;
    float avg;

    scanf("%d", &a);
    while (b != -1)
    {
        scanf("%d", &b);
        if (b != -1)
        {
            avg = ((float)(a + b) / 2);
            printf("%.1f ", avg);
            a = b;
        }
    }

    return 0;
}