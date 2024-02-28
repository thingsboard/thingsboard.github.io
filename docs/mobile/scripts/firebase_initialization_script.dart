import 'dart:io';

void main(List<String> args) async {
  final root = args.where((element) => element.contains('--root')).firstOrNull;

  if (root == null || root.isEmpty) {
    print('Please specify the ThingsBoard project root directory!'
        'dart run firebase_initialization_script.dart '
        '--root=[YOUR_ABSOLUTE_PATH]');

    return;
  }

  final rootPath = root.split('--root=').last;

  _modifyFile('$rootPath/lib/main.dart');
  _modifyFile('$rootPath/lib/utils/services/notification_service.dart');
  _modifyFile('$rootPath/lib/core/context/tb_context.dart');
}

Future<bool> _modifyFile(String filePath) async {
  final file = File(filePath);
  if (await file.exists()) {
    final fileData = await file.readAsLines();

    for (int i = 0; i < fileData.length; ++i) {
      // Looking for the placeholder text to be changed
      if (fileData[i].contains('TODO: firebase_init:')) {
        fileData.removeAt(i);

        // if found next line must be commented, it's contract
        final changedLine = fileData[i].split('// ').last;
        fileData[i] = changedLine;
      }
    }

    await file.writeAsString(fileData.join(Platform.lineTerminator));
    return true;
  }

  return false;
}
