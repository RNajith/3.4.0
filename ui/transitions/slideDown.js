(function($ui){
    
        function slideDownTransition (oldDiv, currDiv, back) {
            oldDiv.style.display = "block";
            currDiv.style.display = "block";
            var that = $ui;
            if (back) {
                that.css3animate(currDiv, {
                    x: "0%",
                    y: "0%",
                    time: "1ms"
                });
                that.css3animate(oldDiv, {
                    y: "-100%",
                    x: "0%",
                    time: "200ms",
                    callback: function() {
                        that.finishTransition(oldDiv);
                        that.css3animate(oldDiv, {
                            x: 0,
                            y: 0,
                            time: "1ms"
                        });
                        currDiv.style.zIndex = 2;
                        oldDiv.style.zIndex = 1;
                    }
                });
            } else {
                oldDiv.style.zIndex = 1;
                currDiv.style.zIndex = 2;
                that.css3animate(oldDiv, {
                    x: "0%",
                    time: "200ms",
                    callback: function() {
                        that.css3animate(oldDiv, {
                            x: 0,
                            y: 0,
                            time: "1ms",
                            callback: function() {
                                that.finishTransition(oldDiv);
                            }
                        });
                    }
                });
                that.css3animate(currDiv, {
                    y: "-100%",
                    x: "0%",
                    time: "1ms",
                    callback: function() {
                        that.css3animate(currDiv, {
                            y: "0%",
                            x: "0%",
                            time: "200ms"
                        });
                    }
                });
            }
        }
        $ui.availableTransitions.down = slideDownTransition;
})($.ui);