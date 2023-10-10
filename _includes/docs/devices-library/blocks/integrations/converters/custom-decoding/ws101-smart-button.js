    if (input.length > 0) {
        for (var i = 0; i < input.length; ) {
            var channel_id = bytes[i++];
            if (i < input.length) {
                var channel_type = bytes[i++];
                // BATTERY
                if (channel_id === 0x01 && channel_type === 0x75) {
                    output.telemetry.battery = bytes[i];
                    i += 1;
                }
                // PRESS STATE
                else if (channel_id === 0xff && channel_type === 0x2e) {
                    switch (bytes[i]) {
                        case 1:
                            output.telemetry.press = "short";
                            break;
                        case 2:
                            output.telemetry.press = "long";
                            break;
                        case 3:
                            output.telemetry.press = "double";
                            break;
                    }
                    i += 1;
                }
            }
        }
    }