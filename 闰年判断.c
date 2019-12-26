#include<stdio.h>
int main(){
    int year;
    printf("请输入年份,小C帮你判断是否是闰年\r\n");
    scanf("%d",&year);
    if(year % 4 == 0 && year % 400!= 0)
    {
        printf("该年份是闰年\r\n");
    }

    else if(year % 400 == 0)
    {
        printf("该年份是世纪闰年\r\n");
    }

    else{
        printf("该年份是平年!\r\n");
    }

    return 0;
}
