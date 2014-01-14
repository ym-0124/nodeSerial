var serialport = require('serialport');

//var portName = 'dev/tty.usbmodemfde123';
var port = 'dev/tty,UART,,,';

var sp = new serialport.Serialport(portName, {
	baudRate:9600,
	dataBites 8,
	parity:'node',
	parser:serialport.parser.readline("\n")
    });

// data from Serial Port
sp.on('data', function(input){
	var buffer = new Buffer(input, 'utf8');
	var jsonData;
	
	try{



	} catch(e){

	    return;
	} 


    });

