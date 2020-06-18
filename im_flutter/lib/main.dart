import 'package:flutter/material.dart';

void main() => runApp(
      home: new MyApp(),
    );

class MyApp extends StatefulWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Intelligent Manufacture System',
      theme: new ThemeData(primaryColor: Colors.white),
    );
  }
}
