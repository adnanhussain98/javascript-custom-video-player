document.addEventListener ("DOMContentLoaded", handleDocumentLoad)
function handleDocumentLoad()
{                                                               //VARIABLES
    
    //VIDEO
    var video = document.getElementById ("video");
    
    //PLAY BUTTON
    var playButton = document.getElementById ("playPause");
    
    //MUTE BUTTON
    var muteUnmuteButton = document.getElementById ("mute");
    
    //SCRUB SLIDER
    var scrubSlider = document.getElementById ("seekBar");
    
    //VOLUME SLIDER
    var volumeScrub = document.getElementById ("volumeSlider");
    
    //CURRENT TIME
    var currentDurationDisplay = document.getElementById ("currentDuration");
    
    //PLAYBACK SPEED CHANGER
    var playbrate = document.getElementById ("playbackList");
    
    //FAST FORWARD & REWIND BUTTON
    var fastforwardButton = document.getElementById (fastforwardPlay);
    var rewindButton = document.getElementById ("rewindPlay");
    
    
                                                            //EVENT LISTENERS
    //PLAY BUTTON
    playButton.addEventListener ("click", playPause);
    
    //MUTE BUTTON
    muteUnmuteButton.addEventListener ("click", muteUnmuteVideo);
    
    //SCRUB SLIDER
    scrubSlider.addEventListener ("change", scrubVideo);
    video.addEventListener ("timeupdate", movePlaySlider);
    scrubSlider.addEventListener("mousedown", pauseSlider); 	
    scrubSlider.addEventListener("mouseup", resumeSlider);
    
    //VOLUME SLIDER
    volumeScrub.addEventListener("change", volumeSlider);
    
    //VIDEO 
    video.addEventListener ("timeupdate", movePlaySlider);
    video.addEventListener ("durationchange", getCurrentDuration);
    playbrate.addEventListener ("click", setPlayrate);
    fastforwardButton.addEventListener ("mousedown", fastforwardDown);
    fastforwardButton.addEventListener ("mouseup", fastforwardUp);
    fastforwardButton.addEventListener ("dblclick", fastforwardClick);
    rewindButton.addEventListener ("click", rewindClick);
    
    
    //PLAY-PAUSE BUTTONS
    
    function playButton()
    {
        if (video.paused === true)                   /*video is the variable id. If the video is playing, then toggle pause button or else toggle play button if video is paused. */
        {
            video.play();                          
            playButton.innerHTML = "Pause";          //button caption
        }//end if
        else
        {
            video.pause();                          
            playButton.innerHTML = "Play";           //button caption
        }   
    
    //MUTE-UNMUTE BUTTONS
    
    function muteUnmuteVideo()
    {
        if (video.muted === true)                    /*Listening for the video.muted event. If the video isn't muted, toggle mute                                                    button or else if the video is muted, toggle the unmute button. */
        {
            video.muted = false;                     //false = not muted           
            muteUnmuteButton.innerHTML = "Mute";     //button caption  
        }
        else
        {
            video.muted = true;                      //false = muted
            muteUnmuteButton.innerHTML = "Unmute";   //button caption
        }
     } //end muteUnmute function
    
    //SCRUB SLIDER
    
    function scrubVideo()
    {
        var scrubTime = video.duration * (scrubSlider.value/100);
        video.currentTime = scrubTime;
    }
    
    
    
    function movePlaySlider()
    {
        var playbackPoint = (100/video.duration) * video.currentTime;
        scrubSlider.value = playbackPoint;
    }
    
    
    
    function pauseSlider()
    {
        video.pause();
    }
    
    
    
    function resumeSlider()
    {
        video.play();
    }
    
    //VOLUME SLIDER
    
    function volumeSlider()
    {
        var scrubVolume = (volumeScrub.value/100)   
        video.volume = scrubVolume;                 //volume property updates the volume level.
    }
    
    //CURRENT TIME
    
    function getCurrentDuration()
    {
        var videoDuration = video.currentTime;
        
        var minutes = Math.floor(videoDuration /60);    //position of video in minutes.
        var seconds = Math.floor(videoDuration %60);    //position of video in seconds.
        
        if (minutes<10) minutes = "0" + minutes;
        if (seconds <10) seconds = "0" + seconds;
        currentDurationDisplay.setAttribute ("value", (minutes + ":" + seconds) ;
    }
    
    //PLAYBACK SPEED CHANGER
    
    function setPlayrate()
    {
        if("2" === playbrate.options[playbrate.selectedIndex].value){
            video.playbackRate = 2.0;
        }
        
        if("175" === playbrate.options[playbrate.selectedIndex].value){
            video.playbackRate = 17.5;
        }
        
        if("15" === playbrate.options[playbrate.selectedIndex].value){
            video.playbackRate = 1.5;
        }
        
        if("125" === playbrate.options[playbrate.selectedIndex].value){
            video.playbackRate = 1.25;
        }
        
        if("1" === playbrate.options[playbrate.selectedIndex].value){
            video.playbackRate = 1;
        }
        
        if("075" === playbrate.options[playbrate.selectedIndex].value){
            video.playbackRate = 0.75;
        }
        
        if("05" === playbrate.options[playbrate.selectedIndex].value){
            video.playbackRate = 0.5;
        }
    }
    
    //FAST-FORWARD + REVERSE CONTROL
    
    function fastforwardDown()
    {
        video.playbackRate = 3.0;
    }
    
    function fastforwardUp()
    {
        video.playbackRate = 2.0;
    }
    
    function fastforwardClick()
    {
        video.playbackRate = 1.0;
    }
    
    function rewindClick()
    {
        video.currentTime = video.currentTime = -500000;
    }  
}