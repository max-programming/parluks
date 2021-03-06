const installer = require('electron-installer-redhat')

const options = {
    src: '../../install/linux/source/Parluks-linux-x64',
    dest: '../../install/linux/',
    arch: 'x86_64'
}

async function main (options) {
    console.log('Creating package (this may take a while)')

    try {
        await installer(options)
        console.log(`Successfully created package at ${options.dest}`)
    } catch (err) {
        console.error(err, err.stack)
        process.exit(1)
    }
}
main(options)