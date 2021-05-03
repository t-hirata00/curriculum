package study;

/**
 * User.java
 */
class User {

    // フィールド変数
    private String userName;
    private int id;
    private String password;

    // コンストラクタ
    public User(String userName, int id, String password) {
        this.userName = "平田哲也";
        this.id = 797;
        this.password = "abc0000";
    }

    // ① 以下のルールに従いアカウント情報（名前、ID、パスワード）を出力するメソッドを作成してください。
    // アクセス修飾子:「protected」
    // メソッド名:「printAccountInfo」
    protected void printAcountInfo() {
    	System.out.println("ユーザ名は、"+ this.userName);
    	System.out.println("IDは、"+ this.id);
    	System.out.println("パスワードは、"+ this.password);
    }


}