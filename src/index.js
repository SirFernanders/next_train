'use strict';
const Alexa = require('alexa-sdk');
const APP_ID = undefined;
const trainSchedules = {

    "en-US": {
        "trains": {
            "TrainSchedule": [
                //The Train Schedules will go here.
            ],
            "SKILL_NAME" : "Next Train"
        }
    }
};

exports.handler = function(event, context, callback) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    
    alexa.resources = trainSchedules;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('NextTrain');
    },
    'NextTrain': function () {
        //It gets the next train on schedule.
        const trainSchedule = this.t('TrainSchedule');

        const trainTime = " ";


        // Create speech output
        const speechOutput = "The next train will come at " + trainTime;
        this.emit(':tellWithCard', speechOutput, this.t("SKILL_NAME"))
    }
};