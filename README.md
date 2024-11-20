# test-tflite-model 👋

## TFLite issues

I noticed, starting in October 2024 that newly trained models do not load in the [`react-native-fast-tflite`](https://github.com/mrousavy/react-native-fast-tflite) library anymore. For example, my model trained in August is OK. The repository here uses a model trained on Nov 19, 2024. Here is the error:

> LOG Loading Tensorflow Lite Model 64

> ERROR Failed to load Tensorflow Model 64!

> [Error: Failed to create TFLite interpreter from model "http://{ipaddress}:8081/assets/?unstable_path=.%2Fsrc%2Fassets%2Ftflite/model.tflite?platform=ios&hash=b5a4007b78717448684b1886a703f064"!]

I currently use Google VertexAI to run & train my model, which is exported to TFLite. The model attached to this repo was also created in Vertex to provide smaple.

It seems that the `TensorflowModelDelegate` argument type causes the model to no longer load:
`const modelData = useTensorflowModel(modelAsset, GPUDelegate);`, only by removing it do the new TFLite models successfully load.

## Get started

1. Install dependencies

   ```bash
   yarn
   ```

2. Start the app

   `yarn ios` or `yarn android`

3. On mount of the root component, the library will not be able to load the `model.tflite` file.

### Expo app

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app). It uses "prebuild" & "devbuild" to install dependencies that any bare React Native project would also use.
