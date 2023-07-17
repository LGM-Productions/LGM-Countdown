# LGM-Countdown
A Javascript Library that creates a customized countdown.

## Info:
The time format is: "(Month) (Date), (Year) (Hour):(Minute):(Second)"
Time Zones can be added by Placing in GMT(- or +)(Time Number Here)
This makes your countdown synced to all time zones.

If you do not know your timezone you can search "what is my timezone".
   
## Notices: 
- Placing in AM Or PM will not work. 
* If you want to use an hour over noon, add 12 to your hour.   
+ If you want to get the time string do this:
```js           
LGMCountdown.tick(...).formatted
```              
This will return the milliseconds left for custom functions.
```js                  
LGMCountdown.tick(...).ms
```              
If you added custom text, use this:
```js              
LGMCountdown.tick(...).endText
```             
If the formatted time is zero, the countdown is over.
