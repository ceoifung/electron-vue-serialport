import SerialPort from "serialport";
import { EventEmitter } from 'events'

let _serialPort = null
class SerialPortUtils {
    constructor() {
        this.SPsettings = {
            portName: "COM2",
            options: {
                baudRate: 115200, //波特率
                dataBits: 8, //数据位
                parity: "none", //奇偶校验
                stopBits: 1, //停止位
                flowControl: false,
                autoOpen: false,
            },
        }
    }

    initSerialPort = (portName) => {
        this.SPsettings.portName = portName
        _serialPort = new SerialPort(
            this.SPsettings.portName,
            this.SPsettings.options,
            false
        );
        _serialPort.open((error) => {
            this.notify('onConnected', error)
        });
        _serialPort.on('error', error => {
            this.notify('onError', error)
        })
        _serialPort.on('data', (data) => {
            this.notify('onReceived', data)
        })
        _serialPort.on('disconnect', function() {
            this.notify('onDisconnect')
        })
    }

    closeSerialPort = () => {
        if (_serialPort)
            _serialPort.close((error) => {
                this.notify('onClose', error)
            })
    }

    getIntance = () => {
        return _serialPort
    }

    async listSerialPort() {
        var list = []
        let ports = await SerialPort.list();
        ports.forEach(function(port) {
            list.push({
                key: port.path,
                value: port.path
            })
        });
        return new Promise((resolve, reject) => {
            resolve(list)
        });
    }

    sendData = data => {
        if (_serialPort)
            _serialPort.write(data)
    }
    notify = (signal, data) => {
        this.emit(signal, data)
    }
    remove = (someEvent, listener) => {
        console.log('clear listener...', someEvent)
        this.removeListener(someEvent, listener);
    }
}
SerialPortUtils.prototype.__proto__ = EventEmitter.prototype;

export default new SerialPortUtils()