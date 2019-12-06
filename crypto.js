const crypto = require('crypto');

const secret = 'xifo efcvhhjoh, opwjdft jotfsu dpssfdujwf dpef; fyqfsut sfnpwf efgfdujwf dpef. sjdibse qbuujt';
const hash = crypto.createHash('sha1', secret)
                   .update('when debugging, novices insert corrective code; experts remove defective code. richard pattis')
                   .digest('hex');
console.log(hash);