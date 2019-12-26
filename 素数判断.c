#include<stdio.h>
#include<math.h>
int read_text();
//int save_data[10000]={0};
#define MAX_LINE 10
int main(){
    int num;
    printf("请输入需要判断的数!\r\n");
    scanf("%d",&num);
    char i ;
    for(i = 2; i<sqrt(num);i++)
    {
        if(num% i == 0)
        break;
    }

    if( i >= sqrt(num))
    printf("该数为素数\r\n");
    else
    printf("该数为合数\r\n");


    return 0;
}

#if 0
int read_text(){

         char buf[MAX_LINE];  /*缓冲区*/
         FILE *fp;            /*文件指针*/
         int len , num;             /*行字符个数*/
         int i = 0;
         if((fp = fopen("test.txt","r")) == NULL)
         {
             perror("fail to read");
             exit (1) ;
         }
         while(fgets(buf,MAX_LINE,fp) != NULL)
         {
             len = strlen(buf);
             buf[len-1] = '\0';  /*去掉换行符*/
             printf("字符串与个数:%s %d \n",buf,len - 1);
             num = atoi(buf);
             save_data[i] = num;
             printf("转化后的数:%d\r\n",num);
             i++;
         }


         return i+1;
}
#endif
