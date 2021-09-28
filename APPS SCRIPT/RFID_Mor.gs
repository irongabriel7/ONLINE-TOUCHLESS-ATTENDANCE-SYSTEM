function RFID_Mor() 
{
  /* Record Sheet accessing */
  var recordsheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("record");
  /* 'Data' Sheet accessing */
  var datasheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("data");
  var rule = SpreadsheetApp.newDataValidation().requireDate();  
  var sum;
  var date= Utilities.formatDate(new Date(), SpreadsheetApp.getActive().getSpreadsheetTimeZone(), "MM")  

  for(var i=2;datasheet.getRange(i,1).getValue()!="";i++)
  { var count=0;
    for(var j=2;recordsheet.getRange(j,3).getValue()!="";j++)
    {
      if(recordsheet.getRange(j,3).getValue() == datasheet.getRange(i,1).getValue())
      {
        count++;
      }      
      if(count>=1)
      {
        if(date==1)
        {
          sum=datasheet.getRange(i,3).getValue();
          sum=sum+0.5;
          datasheet.getRange(i,3).setValue(sum);
          break;
        }
        else if(date==2)
        {
          sum=datasheet.getRange(i,4).getValue();
          sum=sum+0.5;
          datasheet.getRange(i,4).setValue(sum);
          break;
        }
        else if(date==3)
        {
          sum=datasheet.getRange(i,5).getValue();
          sum=sum+0.5;
          datasheet.getRange(i,5).setValue(sum);
        }
        else if(date==4)
        {
          sum=datasheet.getRange(i,6).getValue();
          sum=sum+0.5;
          datasheet.getRange(i,6).setValue(sum);
        }
        else if(date==5)
        {
          sum=datasheet.getRange(i,7).getValue();
          sum=sum+0.5;
          datasheet.getRange(i,7).setValue(sum);
        }
        else if(date==6)
        {
          sum=datasheet.getRange(i,8).getValue();
          sum=sum+0.5;
          datasheet.getRange(i,8).setValue(sum);
        }
        else if(date==7)
        {
          sum=datasheet.getRange(i,9).getValue();
          sum=sum+0.5;
          datasheet.getRange(i,9).setValue(sum);
        }
        else if(date==8)
        {
          sum=datasheet.getRange(i,10).getValue();
          sum=sum+0.5;
          datasheet.getRange(i,10).setValue(sum);
        }
        else if(date==9)
        {
          sum=datasheet.getRange(i,11).getValue();
          sum=sum+0.5;
          datasheet.getRange(i,11).setValue(sum);
          break;
        }
        else if(date==10)
        {
          sum=datasheet.getRange(i,12).getValue();
          sum=sum+0.5;
          datasheet.getRange(i,12).setValue(sum);
          break;
        }
        else if(date==11)
        {
          sum=datasheet.getRange(i,13).getValue();
          sum=sum+0.5;
          datasheet.getRange(i,13).setValue(sum);
          break;
        }
        else if(date==12)
        {
          sum=datasheet.getRange(i,14).getValue();
          sum=sum+0.5;
          datasheet.getRange(i,14).setValue(sum);
          break;
        }
      }      
    }
  }
  
  for(var j=2;recordsheet.getRange(j,3).getValue()!="";j++)
  {
    recordsheet.getRange(j,1).clearContent();
    recordsheet.getRange(j,2).clearContent();
    recordsheet.getRange(j,3).clearContent();    
  }
}
