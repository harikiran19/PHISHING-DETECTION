import pickle
import sklearn
print(sklearn.__version__)
import sys
import types

class CustomUnpickler(pickle.Unpickler):
    def find_class(self, module, name):
        if module == 'sklearn.ensemble._gb_losses' and name == 'LossFunction':
            module = 'sklearn.ensemble._hist_gradient_boosting.loss'
        return super().find_class(module, name)

with open('model.pkl', 'rb') as file:
    gbc = CustomUnpickler(file).load()
