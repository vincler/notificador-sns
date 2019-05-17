var AWS = require('aws-sdk');
var sns, event;

AWS.config.update({ region: 'sa-east-1' });
sns = new AWS.SNS({ apiVersion: '2012-11-05', httpOptions: { timeout: 25000 } });

exports.send = function send(req, res) {
    event = req.body;

    sns.publish({
        Message: JSON.stringify(event.message),
        MessageStructure: 'text',
        TargetArn: event.snsURL,
        Subject: 'Mensagem Enviada para a fila.',
    }, function (err, data) {
        //console.log('err', err);
        console.log('data', data);

        if(err) res.json('ERRO AO NOTIFICAR!', err);
        else res.status(200).json('NOTIFICADO COM SUCESSO!');
    });

}