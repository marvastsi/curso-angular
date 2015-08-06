## Aula 2

### Scope
* ```{{1 + 1}}```
* ```$scope.nome``` e ```{{nome}}```
* Problema:
```
<div ng-controller="MainCtrl">
  {{ nome }}
  <div ng-controller="OutroCtrl">
    {{ nome }}
    <div ng-controller="MaisOutroCtrl">
      {{ nome }}
    </div>
  </div>
</div>
```
* Solução
```
<div ng-controller="MainCtrl">
  {{ nome }}
  <div ng-controller="OutroCtrl">
    Scope nome: {{ nome }}
    Parent nome: {{ $parent.nome }}
    <div ng-controller="MaisOutroCtrl">
      {{ nome }}
      Parent nome: {{ $parent.nome }}
      Parent parent nome: {{ $parent.$parent.nome }}
    </div>
  </div>
</div>
```
* ControllerAs
  - ```var vm=this;```
  - ```return {};```

### Directives
Já vistas
* ngApp
* ngController
* ngView

De hoje
* ngModel
  - input
  - checkbox
* ngShow e ngHide
* ngIf
* ngClass
* ngClick
* ngHref e ngSrc
* ngPluralize
```
<ng-pluralize count="personCount"
                 when="{'0': 'ninguem.',
                     '1': 'só uma pessoa.',
                     'other': '{} pessoas.'}">
</ng-pluralize>
```
* ngRepeat
  - ```num in [1, 2, 3]```
  - ```track by $index```
  - ``` | orderBy: 'id'```
  - ``` | limitTo : limit```
  - ``` | filter```
    + ``` | filter:q```
    + ``` | filter:q as result``` e ```result.length```
    + ``` | filter:{nome: nome, idade: idade}```
* ngOptions
    ```
    <select
          ng-options="item.subItem
                      as item.label
                      for item
                      in values
                      track by item.id"
          ng-model="selected"></select>
    ```

### Nossas Diretivas
* template
* templateUrl
* restrict
* transclude (preto-escuro)
* replace
* link
* controller
* compile
```
compile for parent
compile for child
controller for parent
pre link for parent
controller for child
pre link for child
post link for child
post link for parent
```
