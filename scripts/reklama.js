var res = document.getElementById('result'),
	timerArr = [];

for (var start = 15, i = start; i >= 1; i--)
{
	if (i === start)
  {
  	for (var j = 0; j <= start; j++)
    {
    	timerArr[j] = j;
    }
    timerArr = timerArr.reverse();
  }
    
  (function (idx)
  {
  	setTimeout(function()
    {
     	//console.log(idx);
     	res.innerHTML = idx;
    }, 1000 * (idx - (idx - timerArr[idx])));    
  }(i));
}