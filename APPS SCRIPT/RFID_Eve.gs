function RFID_Eve() 
 {
   /* Record Sheet accessing */
  var recordsheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("record");
  /* 'Data' Sheet accessing */
  var datasheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("data");
  var rule = SpreadsheetApp.newDataValidation().requireDate();  
  var sum,sume;
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
          if(datasheet.getRange(i,3).getValue().toFixed(0)-datasheet.getRange(i,3).getValue()!=1)
          {
            sum=datasheet.getRange(i,3).getValue();
            sum=sum+0.5;
            datasheet.getRange(i,3).setValue(sum);
            break;
          }
        }
        else if(date==2)
        {
          if(datasheet.getRange(i,4).getValue().toFixed(0)-datasheet.getRange(i,4).getValue()!=1)
          {
            sum=datasheet.getRange(i,4).getValue();
            sum=sum+0.5;
            datasheet.getRange(i,4).setValue(sum);
            break;
          }
        }
        else if(date==3)
        {
          if(datasheet.getRange(i,5).getValue().toFixed(0)-datasheet.getRange(i,5).getValue()!=1)
          {
            sum=datasheet.getRange(i,5).getValue();
            sum=sum+0.5;
            datasheet.getRange(i,5).setValue(sum);
            break;
          }      
        }
        else if(date==4)
        {
          if(datasheet.getRange(i,6).getValue().toFixed(0)-datasheet.getRange(i,6).getValue()!=1)
          {
            sum=datasheet.getRange(i,6).getValue();
            sum=sum+0.5;
            datasheet.getRange(i,6).setValue(sum);
            break;
          }      
        }
        else if(date==5)
        {
          if(datasheet.getRange(i,7).getValue().toFixed(0)-datasheet.getRange(i,7).getValue()!=1)
          {
            sum=datasheet.getRange(i,7).getValue();
            sum=sum+0.5;
            datasheet.getRange(i,7).setValue(sum);
            break;
          }      
        }
        else if(date==6)
        {
          if(datasheet.getRange(i,8).getValue().toFixed(0)-datasheet.getRange(i,8).getValue()!=1)
          {
            sum=datasheet.getRange(i,8).getValue();
            sum=sum+0.5;
            datasheet.getRange(i,8).setValue(sum);
            break;
          }      
        }
        else if(date==7)
        {
          if(datasheet.getRange(i,9).getValue().toFixed(0)-datasheet.getRange(i,9).getValue()!=1)
          {
            sum=datasheet.getRange(i,9).getValue();
            sum=sum+0.5;
            datasheet.getRange(i,9).setValue(sum);
            break;
          }      
        }
        else if(date==8)
        {
          if(datasheet.getRange(i,10).getValue().toFixed(0)-datasheet.getRange(i,10).getValue()!=1)
          {
            sum=datasheet.getRange(i,10).getValue();
            sum=sum+0.5;
            datasheet.getRange(i,10).setValue(sum);
            break;
          }      
        }
        else if(date==9)
        {
          if(datasheet.getRange(i,11).getValue().toFixed(0)-datasheet.getRange(i,11).getValue()!=1)
          {
            sum=datasheet.getRange(i,11).getValue();
            sum=sum+0.5;
            datasheet.getRange(i,11).setValue(sum);
            break;
          }          
        }
        else if(date==10)
        {
          if(datasheet.getRange(i,12).getValue().toFixed(0)-datasheet.getRange(i,12).getValue()!=1)
          {
            sum=datasheet.getRange(i,12).getValue();
            sum=sum+0.5;
            datasheet.getRange(i,12).setValue(sum);
            break;
          }      
        }
        else if(date==11)
        {
          if(datasheet.getRange(i,13).getValue().toFixed(0)-datasheet.getRange(i,13).getValue()!=1)
          {
            sum=datasheet.getRange(i,13).getValue();
            sum=sum+0.5;
            datasheet.getRange(i,13).setValue(sum);
            break;
          }      
        }
        else if(date==12)
        {
          if(datasheet.getRange(i,14).getValue().toFixed(0)-datasheet.getRange(i,14).getValue()!=1)
          {
            sum=datasheet.getRange(i,14).getValue();
            sum=sum+0.5;
            datasheet.getRange(i,14).setValue(sum);
            break;
          }      
        }
      }      
    }
  }

  for(var i=2;datasheet.getRange(i,1).getValue()!="";i++)
  {
    if(date==1)
    {
      if(datasheet.getRange(i,3).getValue()+0.5==datasheet.getRange(i,3).getValue().toFixed(0))
      {
        sum=datasheet.getRange(i,3).getValue();
        sum=sum-0.5;
        datasheet.getRange(i,3).setValue(sum);
        break;
      }
    }
    else if(date==2)
    {
      if(datasheet.getRange(i,4).getValue()+0.5==datasheet.getRange(i,4).getValue().toFixed(0))
      {
        sum=datasheet.getRange(i,4).getValue();
        sum=sum-0.5;
        datasheet.getRange(i,4).setValue(sum);
        break;
      }
    }
    else if(date==3)
    {
      if(datasheet.getRange(i,5).getValue()+0.5==datasheet.getRange(i,5).getValue().toFixed(0))
      {
        sum=datasheet.getRange(i,5).getValue();
        sum=sum-0.5;
        datasheet.getRange(i,5).setValue(sum);
        break;
      }
    }
    else if(date==4)
    {
      if(datasheet.getRange(i,6).getValue()+0.5==datasheet.getRange(i,6).getValue().toFixed(0))
      {
        sum=datasheet.getRange(i,6).getValue();
        sum=sum-0.5;
        datasheet.getRange(i,6).setValue(sum);
        break;
      }
    }
    else if(date==5)
    {
      if(datasheet.getRange(i,7).getValue()+0.5==datasheet.getRange(i,7).getValue().toFixed(0))
      {
        sum=datasheet.getRange(i,7).getValue();
        sum=sum-0.5;
        datasheet.getRange(i,7).setValue(sum);
        break;
      }
    }
    else if(date==6)
    {
      if(datasheet.getRange(i,8).getValue()+0.5==datasheet.getRange(i,8).getValue().toFixed(0))
      {
        sum=datasheet.getRange(i,8).getValue();
        sum=sum-0.5;
        datasheet.getRange(i,8).setValue(sum);
        break;
      }
    }
    else if(date==7)
    {
      if(datasheet.getRange(i,9).getValue()+0.5==datasheet.getRange(i,9).getValue().toFixed(0))
      {
        sum=datasheet.getRange(i,9).getValue();
        sum=sum-0.5;
        datasheet.getRange(i,9).setValue(sum);
        break;
      }
    }
    else if(date==8)
    {
      if(datasheet.getRange(i,10).getValue()+0.5==datasheet.getRange(i,10).getValue().toFixed(0))
      {
        sum=datasheet.getRange(i,10).getValue();
        sum=sum-0.5;
        datasheet.getRange(i,10).setValue(sum);
        break;
      }
    }
    else if(date==9)
    {
      if(datasheet.getRange(i,11).getValue()+0.5==datasheet.getRange(i,11).getValue().toFixed(0))
      {
        sum=datasheet.getRange(i,11).getValue();
        sum=sum-0.5;
        datasheet.getRange(i,11).setValue(sum);
        break;
      }
    }
    else if(date==10)
    {
      if(datasheet.getRange(i,12).getValue()+0.5==datasheet.getRange(i,12).getValue().toFixed(0))
      {
        sum=datasheet.getRange(i,12).getValue();
        sum=sum-0.5;
        datasheet.getRange(i,12).setValue(sum);
        break;
      }
    }
    else if(date==11)
    {
      if(datasheet.getRange(i,13).getValue()+0.5==datasheet.getRange(i,13).getValue().toFixed(0))
      {
        sum=datasheet.getRange(i,13).getValue();
        sum=sum-0.5;
        datasheet.getRange(i,13).setValue(sum);
        break;
      }
    }
    else if(date==12)
    {
      if(datasheet.getRange(i,14).getValue()+0.5==datasheet.getRange(i,14).getValue().toFixed(0))
      {
        sum=datasheet.getRange(i,14).getValue();
        sum=sum-0.5;
        datasheet.getRange(i,14).setValue(sum);
        break;
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
