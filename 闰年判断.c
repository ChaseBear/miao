#include<stdio.h>
int main(){
    int year;
    printf("���������,СC�����ж��Ƿ�������\r\n");
    scanf("%d",&year);
    if(year % 4 == 0 && year % 400!= 0)
    {
        printf("�����������\r\n");
    }

    else if(year % 400 == 0)
    {
        printf("���������������\r\n");
    }

    else{
        printf("�������ƽ��!\r\n");
    }

    return 0;
}
