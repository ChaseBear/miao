#include<stdio.h>
#include<math.h>
int read_text();
//int save_data[10000]={0};
#define MAX_LINE 10
int main(){
    int num;
    printf("��������Ҫ�жϵ���!\r\n");
    scanf("%d",&num);
    char i ;
    for(i = 2; i<sqrt(num);i++)
    {
        if(num% i == 0)
        break;
    }

    if( i >= sqrt(num))
    printf("����Ϊ����\r\n");
    else
    printf("����Ϊ����\r\n");


    return 0;
}

#if 0
int read_text(){

         char buf[MAX_LINE];  /*������*/
         FILE *fp;            /*�ļ�ָ��*/
         int len , num;             /*���ַ�����*/
         int i = 0;
         if((fp = fopen("test.txt","r")) == NULL)
         {
             perror("fail to read");
             exit (1) ;
         }
         while(fgets(buf,MAX_LINE,fp) != NULL)
         {
             len = strlen(buf);
             buf[len-1] = '\0';  /*ȥ�����з�*/
             printf("�ַ��������:%s %d \n",buf,len - 1);
             num = atoi(buf);
             save_data[i] = num;
             printf("ת�������:%d\r\n",num);
             i++;
         }


         return i+1;
}
#endif
