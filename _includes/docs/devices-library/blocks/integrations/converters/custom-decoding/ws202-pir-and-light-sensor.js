    if (input.length > 0) {
        for (var i = 0; i < input.length; ) {
            var channel_id = input[i++];
            if (i < input.length) {
                var channel_type = input[i++];
                // BATTERY
                if (channel_id === 0x01 && channel_type === 0x75) {
                    output.telemetry.battery = input[i];
                    i += 1;
                }
                // PIR
                else if (channel_id === 0x03 && channel_type === 0x00) {
                    output.telemetry.pir = input[i] === 0 ? "normal" : "trigger";
                    i += 1;
                }
                // DAYLIGHT
                else if (channel_id === 0x04 && channel_type === 0x00) {
                    output.telemetry.daylight = input[i] === 0 ? "dark" : "light";
                    i += 1;
                }
            }
        }
    }