const { execSync } = require('child_process');
const arg = require('arg');

const getArguments = () => {
    const args = arg({
        '--target': String
    });
    if (!args['--target']) {
        console.error('[-] Please specify target IP or IP range, use --help for usage');
        process.exit(1);
    }
    return args;
}

const scan = (ip) => {
    try {
        const scanResult = execSync(`arp -a ${ip}`).toString();
        const clientList = [];
        const lines = scanResult.split('\n');
        for (let i = 0; i < lines.length - 1; i++) {
            const parts = lines[i].split(' ');
            const ip = parts[1].replace('(', '').replace(')', '');
            const mac = parts[3];
            clientList.push({ ip, mac });
        }
        return clientList;
    } catch (error) {
        console.error(`[-] Error scanning for devices: ${error}`);
        process.exit(1);
    }
}
