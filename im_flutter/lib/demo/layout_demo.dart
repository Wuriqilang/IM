import 'package:flutter/material.dart';

class LayoutDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          ConstrainedBox(
            constraints: BoxConstraints(maxHeight: 200.0, maxWidth: 200.0),
            child: Container(
              color: Color.fromRGBO(3, 54, 255, 1.0),
            ),
          )
        ],
      ),
    );
  }
}

class AspectDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          AspectRatio(
            aspectRatio: 16.0 / 9.0,
            child: Container(
              color: Color.fromRGBO(3, 54, 255, 1.0),
            ),
          ),
        ],
      ),
    );
  }
}

class StackDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
        child: Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Stack(
          alignment: Alignment.topLeft,
          children: <Widget>[
            SizedBox(
              width: 200.0,
              height: 300.0,
              child: Container(
                alignment: Alignment.topCenter,
                decoration: BoxDecoration(
                  color: Color.fromRGBO(3, 54, 255, 1.0),
                  borderRadius: BorderRadius.circular(8.0),
                ),
              ),
            ),
            SizedBox(
              height: 32.0,
            ),
            SizedBox(
              width: 100.0,
              height: 100.0,
              child: Container(
                  decoration: BoxDecoration(
                      color: Color.fromRGBO(3, 54, 255, 1.0),
                      shape: BoxShape.circle,
                      gradient: RadialGradient(colors: [
                        Color.fromRGBO(7, 102, 255, 1.0),
                        Color.fromRGBO(3, 54, 255, 1.0),
                      ])
                      // borderRadius: BorderRadius.circular(8.0),
                      ),
                  child: Icon(
                    Icons.brightness_2,
                    color: Colors.white,
                    size: 32.0,
                  )),
            ),
            Positioned(
              right: 20.0,
              top: 20.0,
              child: Icon(Icons.ac_unit, color: Colors.white, size: 18.0),
            ),
            Positioned(
              right: 20.0,
              top: 200.0,
              child: Icon(Icons.ac_unit, color: Colors.white, size: 18.0),
            ),
            Positioned(
              right: 30.0,
              top: 120.0,
              child: Icon(Icons.ac_unit, color: Colors.white, size: 18.0),
            ),
            Positioned(
              right: 120.0,
              top: 220.0,
              child: Icon(Icons.ac_unit, color: Colors.white, size: 18.0),
            ),
            Positioned(
              right: 40.0,
              top: 210.0,
              child: Icon(Icons.ac_unit, color: Colors.white, size: 18.0),
            ),
            Positioned(
              right: 60.0,
              top: 240.0,
              child: Icon(Icons.ac_unit, color: Colors.white, size: 18.0),
            ),
            Positioned(
              right: 140.0,
              top: 120.0,
              child: Icon(Icons.ac_unit, color: Colors.white, size: 18.0),
            ),
          ],
        )
      ],
    ));
  }
}

class IconBadge extends StatelessWidget {
  final IconData icon;
  final double size;

  IconBadge(this.icon, {this.size = 32.0});

  @override
  Widget build(BuildContext context) {
    return Container(
        child: Icon(icon, size: size, color: Colors.white),
        width: size + 60,
        height: size + 60,
        color: Color.fromRGBO(3, 54, 255, 1.0));
  }
}
